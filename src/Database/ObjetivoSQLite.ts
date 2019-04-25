import SQLiteConfig from "./SQLiteConfig";
import { Transaction, ResultSet } from "react-native-sqlite-storage";
let db = SQLiteConfig;

const createTable = () => {
  db.transaction((tx: Transaction) => {
    //txn.executeSql("DROP TABLE IF EXISTS Turma", []);
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS Objetivos(objetivo_id INTEGER PRIMARY KEY NOT NULL, titulo VARCHAR(400))",
      []
    );
  });
};

const saveObjetivo = (titulo: String) => {
  createTable();
  db.transaction(
    (tx: Transaction) => {
      tx.executeSql("INSERT INTO Objetivos (titulo) VALUES (:titulo)", [
        titulo
      ]);
    },
    (err: any) => console.log("Objetivos " + err)
  );
};

const deletarObjetivo = async (id: number) => {
  createTable();
  return new Promise((res, rej) => {
    db.transaction(
      (tx: Transaction) => {
        tx.executeSql("DELETE FROM `Objetivos` WHERE objetivo_id = :id", [
          id
        ]);
      },
      (err: any) => console.log("DeletarObjetivos " + err)
    );
  });
};

const atualizarObjetivos = async (titulo: string, id: number) => {
  createTable();
  db.transaction(
    (tx: Transaction) => {
      tx.executeSql(
        "UPDATE `Objetivos` SET titulo=:titulo WHERE objetivo_id = :id",
        [titulo, id]
      );
    },
    (err: any) => console.warn("Atualização :" + JSON.stringify(err))
  );
};

const listarObjetivos = () => {
  createTable();
  return new Promise((res, rej) => {
    db.transaction(
      (tx: Transaction) => {
        tx.executeSql(
          "SELECT * FROM Objetivos",
          [],
          (tx: Transaction, results: ResultSet) => {
            const objetivos = [];
            let qtdLinhas = results.rows.length;
            for (let i = 0; i < qtdLinhas; i++) {
              objetivos.push(results.rows.item(i));
            }
            console.log(objetivos);
            res(objetivos);
          }
        );
      },
      (err: any) => console.log("ListaObjetivos " + err)
    );
  });
};

export default {
  saveObjetivo,
  listarObjetivos,
  deletarObjetivo,
  atualizarObjetivos
};

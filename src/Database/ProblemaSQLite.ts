import SQLiteConfig from "./SQLiteConfig";
import { Transaction, ResultSet } from "react-native-sqlite-storage";
let db = SQLiteConfig;

const createTable = () => {
  db.transaction((tx: Transaction) => {
    //txn.executeSql("DROP TABLE IF EXISTS Turma", []);
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS Problemas(problema_id INTEGER PRIMARY KEY NOT NULL, titulo VARCHAR(40),historia VARCHAR(5000))",
      []
    );
  });
};

const saveProblema = (titulo: String, historia: String) => {
  createTable();
  db.transaction(
    (tx: Transaction) => {
      tx.executeSql(
        "INSERT INTO Problemas (titulo,historia) VALUES (:titulo, :historia)",
        [titulo, historia]
      );
    },
    (err: any) => console.log("Problemas " + err)
  );
};

const deletarProblema = async (id: number) => {
  createTable();
  return new Promise((res, rej) => {
    db.transaction(
      (tx: Transaction) => {
        tx.executeSql("DELETE FROM `Problemas` WHERE problema_id = :id", [id]);
      },
      (err: any) => console.log("ListaProblemas " + err)
    );
  });
};

const atualizarProblema = async (
  titulo: string,
  historia: string,
  id: number
) => {
  createTable();
  db.transaction(
    (tx: Transaction) => {
      tx.executeSql(
        "UPDATE `Problemas` SET titulo=:titulo,historia=:historia  WHERE problema_id = :id",
        [titulo, historia, id]
      );
    },
    (err: any) => console.warn("Atualização :" + JSON.stringify(err))
  );
};

const listarProblemas = () => {
  createTable();
  return new Promise((res, rej) => {
    db.transaction(
      (tx: Transaction) => {
        tx.executeSql(
          "SELECT * FROM Problemas",
          [],
          (tx: Transaction, results: ResultSet) => {
            const problemas = [];
            let qtdLinhas = results.rows.length;
            for (let i = 0; i < qtdLinhas; i++) {
              problemas.push(results.rows.item(i));
            }
            console.log(problemas);
            res(problemas);
          }
        );
      },
      (err: any) => console.log("ListaProblemas " + err)
    );
  });
};

export default {
  saveProblema,
  listarProblemas,
  deletarProblema,
  atualizarProblema
};

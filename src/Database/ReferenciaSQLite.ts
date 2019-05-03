import SQLiteConfig from "./SQLiteConfig";
import { Transaction, ResultSet } from "react-native-sqlite-storage";
let db = SQLiteConfig;

const createTable = () => {
  db.transaction((tx: Transaction) => {
    //txn.executeSql("DROP TABLE IF EXISTS Turma", []);
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS Referencias(referencia_id INTEGER PRIMARY KEY NOT NULL, titulo VARCHAR(400))",
      []
    );
  });
};

const saveReferencia = (titulo: String) => {
  createTable();
  db.transaction(
    (tx: Transaction) => {
      tx.executeSql("INSERT INTO Referencias (titulo) VALUES (:titulo)", [
        titulo
      ]);
    },
    (err: any) => console.log("Referencias " + err),
    (a: any) => console.log("Refe", a)
  );
};

const deletarReferencia = async (id: number) => {
  createTable();
  return new Promise((res, rej) => {
    db.transaction(
      (tx: Transaction) => {
        tx.executeSql("DELETE FROM `Referencias` WHERE referencia_id = :id", [
          id
        ]);
      },
      (err: any) => console.log("DeletarReferencias " + err)
    );
  });
};

const atualizarReferencias = async (titulo: string, id: number) => {
  createTable();
  db.transaction(
    (tx: Transaction) => {
      tx.executeSql(
        "UPDATE `Referencias` SET titulo=:titulo WHERE referencia_id = :id",
        [titulo, id]
      );
    },
    (err: any) => console.warn("Atualização :" + JSON.stringify(err))
  );
};

const listarReferencias = () => {
  createTable();
  return new Promise((res, rej) => {
    db.transaction(
      (tx: Transaction) => {
        tx.executeSql(
          "SELECT * FROM Referencias",
          [],
          (tx: Transaction, results: ResultSet) => {
            const referencias = [];
            let qtdLinhas = results.rows.length;
            for (let i = 0; i < qtdLinhas; i++) {
              referencias.push(results.rows.item(i));
            }
            console.log(referencias);
            res(referencias);
          }
        );
      },
      (err: any) => console.log("ListaReferencias " + err)
    );
  });
};

export default {
  saveReferencia,
  listarReferencias,
  deletarReferencia,
  atualizarReferencias
};

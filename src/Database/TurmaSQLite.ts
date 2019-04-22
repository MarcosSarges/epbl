import { Transaction, ResultSet } from "react-native-sqlite-storage";
import SQLiteConfig from "./SQLiteConfig";

let db = SQLiteConfig;

const createTable = () => {
  db.transaction((txn: any) => {
    //txn.executeSql("DROP TABLE IF EXISTS Turma", []);
    txn.executeSql(
      "CREATE TABLE IF NOT EXISTS Turmas(turma_id INTEGER PRIMARY KEY NOT NULL, titulo VARCHAR(40),ano VARCHAR(10),semestre VARCHAR(10))",
      []
    );
  });
};

const salvarTurma = (titulo: String, ano: String, semestre: String) => {
  createTable();
  db.transaction(
    (tx: Transaction) => {
      tx.executeSql(
        "INSERT INTO Turma (titulo,ano,semestre) VALUES (:titulo,:ano,:semestre)",
        [titulo, ano, semestre]
      );
    },
    (err: any) => console.log("Turma " + err)
  );
};

const listarTodasAsTurmas = (): Promise<[]> => {
  //for (let i = 0; i <= 10; i++) salvarTurma('a','1','1');

  return new Promise((res, rej) => {
    try {
      createTable();
      const linhas: any = [];
      db.transaction((tx: Transaction) => {
        tx.executeSql(
          "SELECT * FROM Turma",
          [],
          (tx: Transaction, results: ResultSet) => {
            let len = results.rows.length;
            for (let i = 0; i < len; i++) {
              linhas.push(results.rows.item(i));
            }
            res(linhas);
          }
        );
      });
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });
};

export default {
  salvarTurma,
  listarTodasAsTurmas
};

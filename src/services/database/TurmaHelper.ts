import SQLite, { Transaction, ResultSet } from "react-native-sqlite-storage";
import Nomes from "./../Nomes";

let db = SQLite.openDatabase(
  Nomes.nomeDB,
  Nomes.versaoDB,
  Nomes.descricaoDB,
  Nomes.tamanhoDB
);

const criarTabela = () => {
  db.transaction((txn: any) => {
    //txn.executeSql("DROP TABLE IF EXISTS Turma", []);
    txn.executeSql(
      "CREATE TABLE IF NOT EXISTS Turma(turma_id INTEGER PRIMARY KEY NOT NULL, titulo VARCHAR(40),ano VARCHAR(10),semestre VARCHAR(10))",
      []
    );
  });
};

const salvarTurma = (titulo: String, ano: String, semestre: String) => {
  criarTabela();
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

const listarTodasAsTurmas = () => {
  return new Promise((res, rej) => {
    try {
      criarTabela();
      const linha: any = [];
      db.transaction((tx: Transaction) => {
        tx.executeSql(
          "SELECT * FROM Turma",
          [],
          (tx: Transaction, results: ResultSet) => {
            let len = results.rows.length;
            for (let i = 0; i < len; i++) {
              linha.push(results.rows.item(i));
            }
          }
        );
      });
      res(linha);
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

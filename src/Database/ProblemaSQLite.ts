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
      tx.executeSql(
        "SELECT * FROM Problemas",
        [],
        (tx: Transaction, results: ResultSet) => {
          let len = results.rows.length;
          for (let i = 0; i < len; i++) {
           console.log(results.rows.item(i));
          }
        }
      );
    },
    (err: any) => console.log("Problemas " + err)
  );
};
export default {
  saveProblema
};

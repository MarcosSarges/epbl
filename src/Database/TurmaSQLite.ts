import { Transaction, ResultSet } from "react-native-sqlite-storage";
import SQLiteConfig from "./SQLiteConfig";

let db = SQLiteConfig;

const createTable = () => {
  db.transaction((txn: any) => {
    //txn.executeSql("DROP TABLE IF EXISTS Turma", []);
    txn.executeSql(
      "CREATE TABLE IF NOT EXISTS Turmas(turma_id INTEGER PRIMARY KEY AUTOINCREMENT, titulo VARCHAR(40),ano VARCHAR(10),semestre VARCHAR(10))",
      []
    );
  });
};

// const salvarTurma = (titulo: string, ano: string, semestre: string) => {
//   createTable();

//   let id;
//   db.transaction(
//     (tx: Transaction) => {
//       tx.executeSql(
//         "INSERT INTO Turmas (titulo,ano,semestre) VALUES (:titulo,:ano,:semestre)",
//         [titulo, ano, semestre],
//         (tx, rs) => {
//           id = rs.insertId;
//         }
//       );
//     },
//     (err: any) => console.log("Turma " + err)
//   );

//   return id;
// };

const listarTurmas = (): Promise<[]> => {
  //for (let i = 0; i <= 10; i++) salvarTurma('a','1','1');
  return new Promise((res, rej) => {
    try {
      createTable();
      const linhas: any = [];
      db.transaction((tx: Transaction) => {
        tx.executeSql(
          "SELECT * FROM Turmas",
          [],
          (tx: Transaction, results: ResultSet) => {
            let len = results.rows.length;
            for (let i = 0; i < len; i++) {
              linhas.push(results.rows.item(i));
            }
            console.log(linhas);
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

const deletarTurma = async (id: number) => {
  // createTable();
  return new Promise((res, rej) => {
    db.transaction(
      (tx: Transaction) => {
        tx.executeSql("DELETE FROM `Turmas` WHERE turma_id = :id", [id]);
      },
      (err: any) => console.log("DeletarTurma" + err)
    );
  });
};

const atualizarTurma = async (
  titulo: String,
  ano: String,
  semestre: String,
  id: number
) => {
  // createTable();
  db.transaction(
    (tx: Transaction) => {
      tx.executeSql(
        "UPDATE `Turma` SET titulo=:titulo, ano=:ano, semestre=:semestre WHERE turma_id = :id",
        [titulo, ano, semestre, id]
      );
    },
    (err: any) => console.warn("Atualização :" + JSON.stringify(err))
  );
};

export default {
  // salvarTurma,
  listarTurmas,
  atualizarTurma,
  deletarTurma
};

import { Transaction, ResultSet } from "react-native-sqlite-storage";
import SQLiteConfig from "./SQLiteConfig";
import TurmaSQLite from "./TurmaSQLite";

type Turma = {
  titulo: string;
  ano: string;
  semestre: string;
};

type Problemas = [
  {
    historia: string;
    titulo: string;
  }
];

type Referencias = [
  {
    titulo: string;
  }
];
type Objetivos = [
  {
    titulo: string;
  }
];

type Tutorias = [
  {
    titulo: string;
    subTarefas: [
      {
        titulo: string;
      }
    ];
  }
];

let db = SQLiteConfig;

const createTable = () => {
  db.transaction((txn: any) => {
    txn.executeSql(
      "CREATE TABLE IF NOT EXISTS Turmas(turma_id INTEGER PRIMARY KEY NOT NULL, titulo VARCHAR(40),ano VARCHAR(10),semestre VARCHAR(10))",
      [],
      (tx: Transaction, rs: ResultSet) => {
        console.log(rs);
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS PlanoProb(planoProb_id INTEGER PRIMARY KEY NOT NULL, titulo VARCHAR(40),historia VARCHAR(5000),turma_id INTEGER NOT NULL)",
          [],
          (tx: Transaction, rs: ResultSet) => {
            console.log(rs);
            tx.executeSql(
              "CREATE TABLE IF NOT EXISTS PlanoRef(planoRef_id INTEGER PRIMARY KEY NOT NULL, titulo VARCHAR(400),turma_id INTEGER NOT NULL)",
              [],
              (tx, rs) => {
                console.log(rs);
                tx.executeSql(
                  "CREATE TABLE IF NOT EXISTS PlanoObj(planoObj_id INTEGER PRIMARY KEY NOT NULL, titulo VARCHAR(400),turma_id INTEGER NOT NULL)",
                  [],
                  (tx, rs) => {
                    console.log(rs);
                    tx.executeSql(
                      "CREATE TABLE IF NOT EXISTS PlanoTutoria(planoTuto_id INTEGER PRIMARY KEY NOT NULL, titulo VARCHAR(400), estado INTEGER,turma_id INTEGER NOT NULL)",
                      [],
                      (tx, rs) => {
                        console.log(rs);
                        tx.executeSql(
                          "CREATE TABLE IF NOT EXISTS PlanoTarefas(planoTarefas_id INTEGER PRIMARY KEY NOT NULL, titulo VARCHAR(400), estado INTEGER,planoTuto_id INTEGER NOT NULL)",
                          [],
                          (tx, rs) => {
                            console.log(rs);
                          }
                        );
                      }
                    );
                  }
                );
              }
            );
          }
        );
      }
    );
  });
};

const salvarPlano = (
  Turma: Turma,
  Problemas: Problemas,
  Objetivos: Objetivos,
  Referencias: Referencias,
  Tutorias: Tutorias
) => {
  createTable();
  db.transaction(
    (tx: Transaction) => {
      tx.executeSql(
        "INSERT INTO Turmas (titulo,ano,semestre) VALUES (:titulo,:ano,:semestre)",
        [Turma.titulo, Turma.ano, Turma.semestre],
        (tx, rs) => {
          Problemas.forEach(el => {
            tx.executeSql(
              "INSERT INTO PlanoProb (titulo,historia,turma_id) VALUES (:titulo, :historia,:turma_id)",
              [el.titulo, el.historia, rs.insertId]
            );
          });

          Objetivos.forEach(el => {
            tx.executeSql(
              "INSERT INTO PlanoObj (titulo,turma_id) VALUES (:titulo,:turma_id)",
              [el.titulo, rs.insertId]
            );
          });

          Referencias.forEach(el => {
            tx.executeSql(
              "INSERT INTO PlanoRef (titulo,turma_id) VALUES (:titulo,:turma_id)",
              [el.titulo, rs.insertId]
            );
          });

          Tutorias.forEach(el => {
            console.log(el);

            tx.executeSql(
              "INSERT INTO PlanoTutoria (titulo,estado,turma_id) VALUES (:titulo,0,:turma_id)",
              [el.titulo, rs.insertId],
              (tx, rs) => {
                el.subTarefas.forEach(el => {
                  tx.executeSql(
                    "INSERT INTO PlanoTarefas (titulo,estado,planoTuto_id) VALUES (:titulo,0,:planoTuto_id)",
                    [el.titulo, rs.insertId]
                  );
                });
              }
            );
          });
        }
      );
    },
    (err: any) => console.log("Turma " + err)
  );
};

const listarTudo = (id: number): any => {
  const Problemas: any = [];
  const Objetivos: any = [];
  const Referencias: any = [];
  //const Tutorias: any = [];

  return new Promise((res, rej) => {
    db.transaction((tx: Transaction) => {
      tx.executeSql(
        "SELECT * FROM `PlanoProb` where turma_id = :id",
        [id],
        (tx, rs) => {
          for (let i = 0; i < rs.rows.length; i++) {
            Problemas.push(rs.rows.item(i));
          }
          tx.executeSql(
            "SELECT * FROM `PlanoRef` where turma_id = :id",
            [id],
            (tx, rs) => {
              for (let i = 0; i < rs.rows.length; i++) {
                Referencias.push(rs.rows.item(i));
              }
              tx.executeSql(
                "SELECT * FROM `PlanoObj` where turma_id = :id",
                [id],
                (tx, rs) => {
                  for (let i = 0; i < rs.rows.length; i++) {
                    Objetivos.push(rs.rows.item(i));
                  }
                  tx.executeSql(
                    "SELECT * FROM `PlanoTutoria` where turma_id = :id",
                    [id],
                    async (tx, rs) => {
                      const Tutorias = [];

                      for (let i = 0; i < rs.rows.length; i++) {
                        Tutorias.push(rs.rows.item(i));
                      }

                      res({
                        Problemas,
                        Referencias,
                        Objetivos
                      });
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
};

export default {
  salvarPlano,
  listarTudo
};

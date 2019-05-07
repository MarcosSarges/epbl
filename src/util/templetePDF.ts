export default (turma, planoAula, tutoria) => {
  console.log(tutoria);

  // ${tutoria.map(
  //   ele => `
  //   <div style="display: flex; flex-direction: column">
  //     <div style="display: flex; align-items: center;">
  //       <input type="checkbox" ${ele.estado === 1 ? "checked" : ""} />
  //       <p>${ele.titulo}</p>
  //     </div>
  //     ${ele.subTarefas.map(
  //       el => `
  //     <div
  //       style="display: flex; align-items: center; margin-top: -23px;margin-left: 30px"
  //     >
  //     <input type="checkbox" ${el.estado === 1 ? "checked" : ""} />
  //       <p>${el.titulo}</p>
  //     </div>
  //     `
  //     )}
  //   </div>
  // `
  // )}

  let tut = "";
  let subTut = "";
  tutoria.forEach(ele => {
    tut =
      tut +
      `
         <div style="display: flex; align-items: center;">
           <input type="checkbox" ${ele.estado === 1 ? "checked" : ""} />
           <p>${ele.titulo}</p>
         </div>
       `;

    ele.subTarefas.forEach(el => {
      subTut =
        subTut +
        ` <div
            style="display: flex; align-items: center; margin-top: -23px;margin-left: 30px"
          >
          <input type="checkbox" ${el.estado === 1 ? "checked" : ""} />
          <p>${el.titulo}</p>
          </div>`;
    });

    tut = tut + subTut;
  });
  const f = `<div style="display: flex; flex-direction: column">${tut}</div>`;
  console.log(f);

  return `
  <!DOCTYPE html>
  <html lang="pt-br">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>e-pbl</title>
      <style>
      h1 {
        text-align: center;
      }
      table {
        border: 1px solid #000;
        text-align: center;
        padding: 10px;
      }
      table {
        flex: 1;
        flex-direction: column;
        display: flex;
      }

      td {
        padding: 10px;
        border-top: 1px solid #000;
        border-bottom: 1px solid #000;
      }
      .pai {
        display: flex;
      }
      textarea {
        height: 80px;
        width: 450px;
      }
      h3 {
        margin-right: 8px;
      }
      </style>
    </head>
    <body>
      <h1>E - PBL</h1>
      <h2>Plano de aula</h2>
      <div style="display: flex; flex-direction: row;">
        <h3>Titulo da turma: ${turma.titulo} </h3>
        <h3>Ano da turma: ${turma.ano} </h3>
        <h3>Semestre da turma: ${turma.semestre} </h3>
      </div>
      <h2>Problema(s)</h2>
      <table>
      <thead>
        <tr>
          <th>Titulos</th>
          <th>Historias</th>
        </tr>
      </thead>
      <tbody>
        ${planoAula.Problemas.map(
          el =>
            `<tr>
                <td>${el.titulo}</td>
                <td>
                  <textarea>${el.historia}</textarea>
                </td>
            </tr>`
        )}
      </tbody>
    </table>
      <div class="pai">
        <div style="margin-right: 50px">
          <h2>Objetivo(s)</h2>
          <ul>
           ${planoAula.Objetivos.map(el => `<li>${el.titulo}</li>`)}
          </ul>
        </div>
        <div>
          <h2>Referencia(s)</h2>
          <ul>
          ${planoAula.Referencias.map(el => `<li>${el.titulo}</li>`)}
          </ul>
        </div>
      </div>
      <h2>Tutoria</h2>
     ${f}
    </body>
  </html>
  `;
};

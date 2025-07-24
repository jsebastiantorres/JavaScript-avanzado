// Clase Tarea
class Tarea {
    constructor(materia, isDone, fechaVencimiento) {
        this.materia = materia;
        this.isDone = isDone;
        this.fechaVencimiento = fechaVencimiento;
    }

    mostrarCompleta() {
        console.log(`La tarea se ha completado`);
    }

    mostrarPendiente() {
        console.log(`La tarea esta pendiente, vence: ${this.fechaVencimiento}`);
    }
}


var tareas = [
    new Tarea("Matematicas", true, "2025/07/25"),
    new Tarea("Español", false, "2025/07/25"),
    new Tarea("Ingles", true, "2025/07/23"),
    new Tarea("Música", false, "2025/07/24"),
];


function gestinarTareas(tareas) {

    let tareasCompletas = [];
    let tareasPendientes = [];

    tareas.forEach(tarea => {
        if (!tarea.isDone) {
            tareasPendientes.push(tarea);
        } else {
            tareasCompletas.push(tarea);
        }
    });

    console.log("Tareas completas: ");
    tareasCompletas.forEach(tarea => {
        console.log(tarea);
    })

    console.log("Tareas pendientes: ");
    tareasPendientes.forEach(tarea => {
        console.log(tarea);
    })

}


gestinarTareas(tareas);

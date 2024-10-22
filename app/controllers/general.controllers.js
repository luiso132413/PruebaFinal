

const db = require('../config/db.config.js');
const General = db.General;

exports.create = (req, res) => {
    console.log(req.body);

    let general = {};

    try {
        general.nombre = req.body.nombre;
        general.rol = req.body.rol;
        general.fechanacimiento = req.body.fechanacimiento;
        general.sueldo = req.body.sueldo;

        General.create(general).then(result => {
            res.status(200).json({
                message: "Empleado creado exitosamente con id = " + result.id_gen,
                general: result,
            });
        });
    } catch (erro) {
        res.status(500).json({
            message: "Error al crear al empleado",
            error: error.message
        });
    }
}

exports.retrieveAllGeneral = (req,res) =>{
    General.findAll()
    .then(general => {
        res.status(200).json({
            message: "Todos los empleados han sido obtenidos correctamente",
            general: general
        });
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: "Error al obtener todos los empleados",
            error: error.message
        });
    });
}

exports.getGeneralById = (req, res) => {
    let generalId = req.params.id;

    General.findByPk(generalId)
    .then(general => {
        if (!general){
            res.status(404).json({
                message: "No se encontró un empleado con id = " + generalId,
            });
        } else {
            res.status(200).json({
                message: "Empleado obtenido correctamente con id = " + generalId,
                general: general,
            });
        }
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: "Error al obtener el empleado con id = " + generalId,
            error: error
        });
    });
}

exports.updateById = async (req, res) => {
    try {
        let generalId = req.params.id;
        let general = await General.findByPk(generalId);

        if(!general){
            res.status(404).json({
                message: "No se encontró un empleado con id = " + generalId,
            });
        } else {
            let updatedObject = {
                nombre: req.body.nomnbre,
                rol: req.body.rol,
                fechanacimiento: req.body.fechanacimiento,
                sueldo: req.body.sueldo
            }

            let result = await General.update(updateIbject, {returning: true, where: {id_gen: generalId}});

            if(!result){
                res.status(500).json({
                    message: "Error al actualizar el Empleado con id = " + req.params.id,
                    error: "No se puede actualizar",
                });
            }

            res.status(200).json({
                message: "Empleado actualizado existosamente con id = " + generalId,
                general: updatedObject,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error al actualizar el Empleado con id = " + req.params.id,
            general: error.message
        });
    }
}

exports.deleteById = async (req, res) => {
    try {
        let generalId = req.params.id;
        let general = await General.findByPk(generalId);

        if(!general){
            res.status(404).json({
                message: "No se encontró un empleado con id = " + generalId,
                error: "404",
            });
        } else {
          await general.destroy();
          res.status(200).json({
            message: "Empleado eliminado con id = " + generalId,
            general: general,
          });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar el Empleado con id = " + req.params.id,
            error: error.message,
        }); 
    }
}
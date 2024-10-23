

const db = require('../config/db.config.js');
const General = db.General;

exports.create = (req, res) => {
    console.log(req.body); // Imprimir el cuerpo de la solicitud para depurar

    let general = {};

    try {
        // Creando objeto General a partir de los datos de la solicitud
        general.nombre = req.body.nombre;
        general.rol = req.body.rol;
        general.fechanacimiento = req.body.fechanacimiento;
        general.sueldo = req.body.sueldo;

        // Guardar en la base de datos
        General.create(general).then(result => {
            res.status(200).json({
                message: "Registro creado exitosamente con id = " + result.id_gen,
                general: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al crear el registro",
            error: error.message
        });
    }
}

exports.retrieveAll = (req, res) => {
    // Recuperar todos los registros
    General.findAll()
        .then(records => {
            res.status(200).json({
                message: "Registros recuperados exitosamente",
                records: records
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Error al recuperar los registros",
                error: error
            });
        });
}

exports.getById = (req, res) => {
    let id = req.params.id;

    General.findByPk(id)
        .then(record => {
            if (!record) {
                res.status(404).json({
                    message: "Registro no encontrado con id = " + id,
                });
            } else {
                res.status(200).json({
                    message: "Registro recuperado exitosamente con id = " + id,
                    general: record
                });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Error al recuperar el registro con id = " + id,
                error: error
            });
        });
}

exports.updateById = async (req, res) => {
    try {
        let id = req.params.id;
        let record = await General.findByPk(id);

        if (!record) {
            res.status(404).json({
                message: "Registro no encontrado para actualizar con id = " + id,
            });
        } else {
            let updatedObject = {
                nombre: req.body.nombre,
                rol: req.body.rol,
                fechanacimiento: req.body.fechanacimiento,
                sueldo: req.body.sueldo
            }

            let result = await General.update(updatedObject, { returning: true, where: { id_gen: id } });

            if (!result) {
                res.status(500).json({
                    message: "Error al actualizar el registro con id = " + id,
                    error: "No se pudo actualizar",
                });
            }

            res.status(200).json({
                message: "Registro actualizado exitosamente con id = " + id,
                general: updatedObject,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error al actualizar el registro con id = " + req.params.id,
            error: error.message
        });
    }
}

exports.deleteById = async (req, res) => {
    try {
        let id = req.params.id;
        let record = await General.findByPk(id);

        if (!record) {
            res.status(404).json({
                message: "No existe un registro con id = " + id,
                error: "404",
            });
        } else {
            await record.destroy();
            res.status(200).json({
                message: "Registro eliminado exitosamente con id = " + id,
                general: record,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar el registro con id = " + req.params.id,
            error: error.message,
        });
    }
}

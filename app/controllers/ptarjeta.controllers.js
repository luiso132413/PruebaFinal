const db = require('../config/db.config.js');
const Ptarjeta = db.Ptarjeta;

exports.create = async (req, res) => {
    try {

        const tarjeta = {
            ntarjeta: req.body.ntarjeta,
            mes: req.body.mes,
            anio: req.body.anio,
            cod_seguridad: req.body.cod_seguridad,
            nombret: req.body.nombret,
            correo: req.body.correo
        };

      
        const result = await Ptarjeta.create(tarjeta);
        res.status(201).json({
            message: "Pago con tarjeta creado exitosamente con id = " + result.id_pago,
            tarjeta: result,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al crear el pago con tarjeta",
            error: error.message
        });
    }
};

exports.retrieveAll = async (req, res) => {
    try {
        const tarjetas = await Ptarjeta.findAll();
        res.status(200).json({
            message: "Pagos con tarjeta recuperados exitosamente",
            tarjetas: tarjetas
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al recuperar los pagos con tarjeta",
            error: error.message
        });
    }
};

exports.getById = async (req, res) => {
    const id = req.params.id;

    try {
        const tarjeta = await Ptarjeta.findByPk(id);
        if (!tarjeta) {
            return res.status(404).json({
                message: "Pago con tarjeta no encontrado con id = " + id,
            });
        }
        res.status(200).json({
            message: "Pago con tarjeta recuperado exitosamente con id = " + id,
            tarjeta: tarjeta
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al recuperar el pago con tarjeta con id = " + id,
            error: error.message
        });
    }
};

exports.updateById = async (req, res) => {
    const id = req.params.id;

    try {
        const tarjeta = await Ptarjeta.findByPk(id);
        if (!tarjeta) {
            return res.status(404).json({
                message: "Pago con tarjeta no encontrado para actualizar con id = " + id,
            });
        }

        const updatedObject = {
            ntarjeta: req.body.ntarjeta,
            mes: req.body.mes,
            anio: req.body.anio,
            cod_seguridad: req.body.cod_seguridad,
            nombret: req.body.nombret,
            correo: req.body.correo
        };

        await Ptarjeta.update(updatedObject, { where: { id_pago: id } });
        res.status(200).json({
            message: "Pago con tarjeta actualizado exitosamente con id = " + id,
            tarjeta: updatedObject,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al actualizar el pago con tarjeta con id = " + id,
            error: error.message
        });
    }
};

exports.deleteById = async (req, res) => {
    const id = req.params.id;

    try {
        const tarjeta = await Ptarjeta.findByPk(id);
        if (!tarjeta) {
            return res.status(404).json({
                message: "No existe un pago con tarjeta con id = " + id,
            });
        }

        await tarjeta.destroy();
        res.status(200).json({
            message: "Pago con tarjeta eliminado exitosamente con id = " + id,
            tarjeta: tarjeta,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar el pago con tarjeta con id = " + id,
            error: error.message,
        });
    }
};

const db = require('../config/db.config.js');
const Factura = db.Factura;

// Crear una nueva factura
exports.create = async (req, res) => {
    try {
        // Crear objeto Factura a partir de los datos de la solicitud
        const factura = {
            cod_fact: req.body.cod_fact,
            nombre: req.body.nombre,
            noDocumento: req.body.noDocumento,
            telefono: req.body.telefono,
            fecha: req.body.fecha,
            impuesto: req.body.impuesto || 0.0,
            servicio: req.body.servicio || 0.0,
            cod_pro: req.body.cod_pro,
            des_pro: req.body.des_pro,
            cantidad_pro: req.body.cantidad_pro,
            precio_pro: req.body.precio_pro,
            total: req.body.total,
            totalGlobal: req.body.totalGlobal,
            tipoDepago: req.body.tipoDepago
        };

        // Guardar en la base de datos
        const result = await Factura.create(factura);
        res.status(201).json({
            message: "Factura creada exitosamente con código = " + result.id_fact,
            factura: result,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al crear la factura",
            error: error.message
        });
    }
};

// Recuperar todas las facturas
exports.retrieveAll = async (req, res) => {
    try {
        const facturas = await Factura.findAll();
        res.status(200).json({
            message: "Facturas recuperadas exitosamente",
            facturas: facturas
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al recuperar las facturas",
            error: error.message
        });
    }
};

// Recuperar una factura por ID
exports.getById = async (req, res) => {
    const id = req.params.id;

    try {
        const factura = await Factura.findByPk(id);
        if (!factura) {
            return res.status(404).json({
                message: "Factura no encontrada con código = " + id,
            });
        }
        res.status(200).json({
            message: "Factura recuperada exitosamente con código = " + id,
            factura: factura
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al recuperar la factura con código = " + id,
            error: error.message
        });
    }
};

// Actualizar una factura por ID
exports.updateById = async (req, res) => {
    const id = req.params.id;

    try {
        const factura = await Factura.findByPk(id);
        if (!factura) {
            return res.status(404).json({
                message: "Factura no encontrada para actualizar con código = " + id,
            });
        }

        const updatedObject = {
            cod_fact: req.body.cod_fact,
            nombre: req.body.nombre,
            noDocumento: req.body.noDocumento,
            telefono: req.body.telefono,
            fecha: req.body.fecha,
            impuesto: req.body.impuesto,
            servicio: req.body.servicio,
            cod_pro: req.body.cod_pro,
            des_pro: req.body.des_pro,
            cantidad_pro: req.body.cantidad_pro,
            precio_pro: req.body.precio_pro,
            total: req.body.total,
            totalGlobal: req.body.totalGlobal,
            tipoDepago: req.body.tipoDepago
        };

        await Factura.update(updatedObject, { where: { id_fact: id } });
        res.status(200).json({
            message: "Factura actualizada exitosamente con código = " + id,
            factura: updatedObject,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al actualizar la factura con código = " + id,
            error: error.message
        });
    }
};

// Eliminar una factura por ID (eliminación lógica si paranoid: true)
exports.deleteById = async (req, res) => {
    const id = req.params.id;

    try {
        const factura = await Factura.findByPk(id);
        if (!factura) {
            return res.status(404).json({
                message: "No existe una factura con código = " + id,
            });
        }

        // Este método marcará la factura como "eliminada" si paranoid: true está activado
        await factura.destroy();
        res.status(200).json({
            message: "Factura eliminada exitosamente con código = " + id,
            factura: factura,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar la factura con código = " + id,
            error: error.message,
        });
    }
};

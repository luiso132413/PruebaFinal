

const db = require('../config/db.config.js');
const Cliente = db.Cliente;

exports.create = async (req, res) => {
    try {
        // Crear objeto Cliente a partir de los datos de la solicitud
        const cliente = {
            nombre_cli: req.body.nombre_cli,
            apellido_cli: req.body.apellido_cli,
            fechanacimiento: req.body.fechanacimiento,
            edad: req.body.edad,
            tipo_indentificacion: req.body.tipo_indentificacion,
            no_identificacion: req.body.no_identificacion,
            nacionalidad: req.body.nacionalidad,
            telefono: req.body.telefono
        };

        // Guardar en la base de datos
        const result = await Cliente.create(cliente);
        res.status(201).json({
            message: "Cliente creado exitosamente con id = " + result.id_cli,
            cliente: result,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al crear el cliente",
            error: error.message
        });
    }
};

exports.retrieveAll = async (req, res) => {
    try {
        // Recuperar todos los registros
        const clientes = await Cliente.findAll();
        res.status(200).json({
            message: "Clientes recuperados exitosamente",
            clientes: clientes
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al recuperar los clientes",
            error: error.message
        });
    }
};

exports.getById = async (req, res) => {
    const id = req.params.id;

    try {
        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            return res.status(404).json({
                message: "Cliente no encontrado con id = " + id,
            });
        }
        res.status(200).json({
            message: "Cliente recuperado exitosamente con id = " + id,
            cliente: cliente
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al recuperar el cliente con id = " + id,
            error: error.message
        });
    }
};

exports.updateById = async (req, res) => {
    const id = req.params.id;

    try {
        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            return res.status(404).json({
                message: "Cliente no encontrado para actualizar con id = " + id,
            });
        }

        const updatedObject = {
            nombre_cli: req.body.nombre_cli,
            apellido_cli: req.body.apellido_cli,
            fechanacimiento: req.body.fechanacimiento,
            edad: req.body.edad,
            tipo_indentificacion: req.body.tipo_indentificacion,
            no_identificacion: req.body.no_identificacion,
            nacionalidad: req.body.nacionalidad,
            telefono: req.body.telefono
        };

        await Cliente.update(updatedObject, { where: { id_cli: id } });
        res.status(200).json({
            message: "Cliente actualizado exitosamente con id = " + id,
            cliente: updatedObject,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al actualizar el cliente con id = " + id,
            error: error.message
        });
    }
};

exports.deleteById = async (req, res) => {
    const id = req.params.id;

    try {
        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            return res.status(404).json({
                message: "No existe un cliente con id = " + id,
            });
        }

        await cliente.destroy();
        res.status(200).json({
            message: "Cliente eliminado exitosamente con id = " + id,
            cliente: cliente,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar el cliente con id = " + id,
            error: error.message,
        });
    }
};

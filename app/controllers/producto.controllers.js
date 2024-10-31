const db = require('../config/db.config.js');
const Producto = db.Producto;

exports.create = async (req, res) => {
    try {
   
        const producto = {
            descripcion: req.body.descripcion,
            precio: req.body.precio
        };


        const result = await Producto.create(producto);
        res.status(201).json({
            message: "Producto creado exitosamente con código = " + result.codigo,
            producto: result,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al crear el producto",
            error: error.message
        });
    }
};

exports.retrieveAll = async (req, res) => {
    try {

        const productos = await Producto.findAll();
        res.status(200).json({
            message: "Productos recuperados exitosamente",
            productos: productos
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al recuperar los productos",
            error: error.message
        });
    }
};

exports.getById = async (req, res) => {
    const id = req.params.id;

    try {
        const producto = await Producto.findByPk(id);
        if (!producto) {
            return res.status(404).json({
                message: "Producto no encontrado con código = " + id,
            });
        }
        res.status(200).json({
            message: "Producto recuperado exitosamente con código = " + id,
            producto: producto
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al recuperar el producto con código = " + id,
            error: error.message
        });
    }
};

exports.updateById = async (req, res) => {
    const id = req.params.id;

    try {
        const producto = await Producto.findByPk(id);
        if (!producto) {
            return res.status(404).json({
                message: "Producto no encontrado para actualizar con código = " + id,
            });
        }

        const updatedObject = {
            descripcion: req.body.descripcion,
            precio: req.body.precio
        };

        await Producto.update(updatedObject, { where: { codigo: id } });
        res.status(200).json({
            message: "Producto actualizado exitosamente con código = " + id,
            producto: updatedObject,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al actualizar el producto con código = " + id,
            error: error.message
        });
    }
};

exports.deleteById = async (req, res) => {
    const id = req.params.id;

    try {
        const producto = await Producto.findByPk(id);
        if (!producto) {
            return res.status(404).json({
                message: "No existe un producto con código = " + id,
            });
        }


        await producto.destroy();
        res.status(200).json({
            message: "Producto eliminado exitosamente con código = " + id,
            producto: producto,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar el producto con código = " + id,
            error: error.message,
        });
    }
};

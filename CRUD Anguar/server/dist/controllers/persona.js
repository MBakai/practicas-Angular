"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putPersona = exports.postPersona = exports.deletePersona = exports.getPersona = exports.getPersonas = void 0;
const getPersonas = (req, resp) => {
    resp.json({
        msg: 'Obtener a todas los usuarios'
    });
};
exports.getPersonas = getPersonas;
const getPersona = (req, resp) => {
    const { id } = req.params;
    resp.json({
        msg: 'Buscar una Persona',
        id: id
    });
};
exports.getPersona = getPersona;
const deletePersona = (req, resp) => {
    const { id } = req.params;
    resp.json({
        msg: 'Eliminar una Persona',
        id: id
    });
};
exports.deletePersona = deletePersona;
const postPersona = (req, resp) => {
    const { body } = req.body;
    resp.json({
        msg: 'Registrar una Persona',
        body: body
    });
};
exports.postPersona = postPersona;
const putPersona = (req, resp) => {
    const { body } = req;
    const { id } = req.params;
    resp.json({
        msg: 'Actualizar una Persona',
        body: body,
        id: id
    });
};
exports.putPersona = putPersona;

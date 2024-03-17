const{ Router } = require('express');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Crear un nuevo usuario
// Los middleware se ejecutan de manera secuencial
router.post('/register',[
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña no es valida!!').isLength({min: 6}),
    validarCampos

],crearUsuario);
    


// login de usuario
router.post('/',[
    check('email', 'El email es obligatorio!!').isEmail(),
    check('password', 'La contraseña no es valida').isLength({min: 6}),
    validarCampos
    
] ,loginUsuario);

// Validar y revalidar token
router.get('/renew',validarJWT ,revalidarToken);

module.exports = router;
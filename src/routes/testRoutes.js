import express from 'express';
import TestController from '../controllers/testController.js';  // Verifique se o caminho está correto

const testRouter = express.Router();
const testController = new TestController();

// Rota para obter todos os testes
testRouter.get('/', async (req, res) => {
    try {
        const { body, success, statusCode } = await testController.getTests();
        res.status(statusCode).send({ body, success, statusCode });
    } catch (error) {
        res.status(500).send({ body: error.message, success: false, statusCode: 500 });
    }
});

// Rota para obter um teste específico por ID
testRouter.get('/:id', async (req, res) => {
    try {
        const { body, success, statusCode } = await testController.getTest(req.params.id);
        res.status(statusCode).send({ body, success, statusCode });
    } catch (error) {
        res.status(500).send({ body: error.message, success, statusCode: 500 });
    }
});

// Rota para criar um novo teste
testRouter.post('/', async (req, res) => {
    try {
        const { body, success, statusCode } = await testController.createTest(req.body);
        res.status(statusCode).send({ body, success, statusCode });
    } catch (error) {
        res.status(500).send({ body: error.message, success, statusCode: 500 });
    }
});

// Rota para atualizar um teste existente
testRouter.put('/:id', async (req, res) => {
    try {
        const { body, success, statusCode } = await testController.updateTest(req.params.id, req.body);
        res.status(statusCode).send({ body, success, statusCode });
    } catch (error) {
        res.status(500).send({ body: error.message, success, statusCode: 500 });
    }
});

// Rota para deletar um teste
testRouter.delete('/:id', async (req, res) => {
    try {
        const { body, success, statusCode } = await testController.deleteTest(req.params.id);
        res.status(statusCode).send({ body, success, statusCode });
    } catch (error) {
        res.status(500).send({ body: error.message, success, statusCode: 500 });
    }
});

export default testRouter;

import mongoose from 'mongoose';
import Test from '../models/testModels.js';

class TestController {
    async getTests() {
        try {
            const tests = await Test.find({});
            return { body: tests, success: true, statusCode: 200 };
        } catch (error) {
            return { body: error.message, success: false, statusCode: 500 };
        }
    }

    async getTest(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return { body: 'Invalid ID format', success: false, statusCode: 400 };
        }

        try {
            const test = await Test.findById(id);
            if (!test) {
                return { body: 'Test not found', success: false, statusCode: 404 };
            }
            return { body: test, success: true, statusCode: 200 };
        } catch (error) {
            return { body: error.message, success: false, statusCode: 500 };
        }
    }

    async createTest(testData) {
        try {
            const test = await Test.create(testData);
            return { body: test, success: true, statusCode: 201 };
        } catch (error) {
            return { body: error.message, success: false, statusCode: 500 };
        }
    }

    async updateTest(id, testData) {
        try {
            const test = await Test.findByIdAndUpdate(id, testData, { new: true, runValidators: true });
            if (!test) {
                return { body: 'Test not found', success: false, statusCode: 404 };
            }
            return { body: test, success: true, statusCode: 200 };
        } catch (error) {
            return { body: error.message, success: false, statusCode: 500 };
        }
    }

    async deleteTest(id) {
        try {
            const test = await Test.findByIdAndDelete(id);
            if (!test) {
                return { body: 'Test not found', success: false, statusCode: 404 };
            }
            return { body: 'Test deleted successfully', success: true, statusCode: 200 };
        } catch (error) {
            return { body: error.message, success: false, statusCode: 500 };
        }
    }
}

export default TestController;

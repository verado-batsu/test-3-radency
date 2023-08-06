"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodoById = void 0;
const helpers_1 = require("../../helpers");
const deleteTodoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { contactId } = req.params;
    const deletedContact = yield Contact.findByIdAndDelete(contactId);
    if (!deletedContact) {
        throw (0, helpers_1.HttpError)(404);
    }
    res.json({ message: 'contact deleted' });
});
exports.deleteTodoById = deleteTodoById;
//# sourceMappingURL=deleteTodoById.js.map
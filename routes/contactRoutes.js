import { Router } from "express";
import { createContact, getContacts, deleteContact } from "../controllers/contactControllers.js";

const contactRouter = Router();

contactRouter.post("/contacts", createContact);
contactRouter.get("/contacts", getContacts);
contactRouter.delete("/contacts/:id", deleteContact);

export default contactRouter;
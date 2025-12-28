import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import { ContactFormData } from "../types/contact";

export const saveMessageToFirestore = async (data: ContactFormData) => {
  const messagesRef = collection(db, "messages");

  await addDoc(messagesRef, {
    name: data.name.trim(),
    email: data.email.trim(),
    subject: data.subject.trim(),
    message: data.message.trim(),
    timestamp: Timestamp.now(),
    read: false,
  });
};

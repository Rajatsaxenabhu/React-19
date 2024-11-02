import prisma from '../db/postgre'; 
import { Request, Response } from "express";

export const sendMessage = async (req: Request, res: Response): Promise<any> => {
    try {
        const {message}=req.body;
        const receiverId = req.params.id;
        const senderId = req.user.id;
        console.log(message,receiverId,senderId);
        if (!message || !receiverId || !senderId) {
            return res.status(400).json({ message: 'Bad Request: Missing required fields' });
        }
        let conv = await prisma.chat.findFirst({
            where: {
                participantId: {
                    hasEvery: [senderId, receiverId]
                }
            }
        });

        if (!conv) {
            conv = await prisma.chat.create({
                data: {
                    type: "private",
                    createdBy: senderId, 
                    participantId: {
                        set: [senderId, receiverId]
                    }
                }
            });
        }

        const msgg = await prisma.message.create({
            data: {
                sender_id: senderId,
                content: message,
                chat_id: conv.chat_id
            }
        });

        // sockert io commination


        res.status(200).json({ message: 'Message sent successfully' }); // Send a success response
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: (error as Error).message }); // Send an error response
    }
};


export const receiveMessage = async (req: Request, res: Response): Promise<any> => {
    try {
        const usertochatId = req.params.id;
        const senderId = req.user.id;
        console.log(usertochatId);
        const conv=await prisma.chat.findFirst({
            where: {
                participantId: {
                    hasEvery: [senderId,usertochatId]
                }
            },include:{
                messages:{
                    orderBy:{
                        createdAt:'asc'
                    }
                }
            }
        });
        if (!conv) {
            return res.status(200).json([]);
        }
        res.status(200).json(conv.messages); // Send a success response
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: (error as Error).message }); // Send an error response
    }
}

export const sideMessage=async (req:Request,res:Response):Promise<any>=>{
    const userId=req.params.id;
    const convs= await prisma.user.findMany({
        where:{
            id:{
                not: userId
            }
        },
        select:{
            id:true,
            username:true
        }
    })
    res.status(200).json(convs)
}
import { ID, storage } from '@/appwrite';
import React from 'react'

const uploadImage = async (file: File) => {
    if (!file) return;

    const fileUploaded = await storage.createFile(
        process.env.IMAGE_ID!,
        ID.unique(),
        file
    )

    return fileUploaded
}

export default uploadImage
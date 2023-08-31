import { ID, storage } from '@/appwrite';
import React from 'react'

const uploadImage = async (file: File) => {
    if (!file) return;

    const fileUploaded = await storage.createFile(
        process.env.IMAGE_ID!,
        // '64e8768f64035f8b91ea',
        ID.unique(),
        file
    )

    return fileUploaded
}

export default uploadImage
import jwt from 'jsonwebtoken'
import { NextRequest } from 'next/server'
import User from '@/models/User'
import connectToDB from './mongoose'

export async function getUser(req: NextRequest) {
    await connectToDB()

    const token = req.cookies.get('token')?.value
    if (!token) return null

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string }
        const user = await User.findById(decoded.userId).select('email username')
        return user
    } catch (err) {
        return err
    }
}

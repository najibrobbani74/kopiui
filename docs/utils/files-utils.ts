import { promises as fs } from 'fs';
import { join } from 'path';

export async function readFile(filePath: string): Promise<string> {
    try {
        if (filePath === '') {
            return '';
        }
        const data = await fs.readFile(filePath, 'utf-8');
        return data;
    } catch (error) {
        console.error(`Error reading file ${filePath}:`, error);
        throw error;
    }
}
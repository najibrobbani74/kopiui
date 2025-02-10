import { promises as fs } from 'fs';

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

export function keyToTitle(key: string): string {
    return key.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
export function keyToComponentName(key: string): string {
    return key.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

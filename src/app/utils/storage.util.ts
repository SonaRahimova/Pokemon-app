//This is the storage, where the value is stored in sessionStorage. 
export class StorageUtil {
    public static storageSave<T>(key: string, value: T): void {
        sessionStorage.setItem(key, JSON.stringify(value));
}

// This method reads from the storage
public static storageRead<T>(key: string): T | undefined {
    const storedValue = sessionStorage.getItem(key);
    try {
        if (storedValue) {
            return JSON.parse(storedValue) as T;        
        } 
        return undefined;
    } 
    catch (e) {
        sessionStorage.removeItem(key);
        return undefined;
        
        }
    }   
}

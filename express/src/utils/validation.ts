export function validId(id: string) {
    const userId = parseInt(id)
    if (Number.isInteger(userId))
        return true
    
    return false
}
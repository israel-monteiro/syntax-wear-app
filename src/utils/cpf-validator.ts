export function isValidCPF(cpf: string): boolean {
    // Remove tudo que não for número
    const cleanCPF = cpf.replace(/\D/g, "");

    // CPF deve ter 11 dígitos
    if (cleanCPF.length !== 11) return false;

    // Rejeita CPFs com todos os dígitos iguais
    if (/^(\d)\1{10}$/.test(cleanCPF)) return false;

    // Cálculo do primeiro dígito verificador
    let sum = 0;

    for (let i = 0; i < 9; i++) {
        sum += Number(cleanCPF[i]) * (10 - i);
    }

    let firstDigit = (sum * 10) % 11;
    if (firstDigit === 10) firstDigit = 0;

    if (firstDigit !== Number(cleanCPF[9])) return false;

    // Cálculo do segundo dígito verificador
    sum = 0;

    for (let i = 0; i < 10; i++) {
        sum += Number(cleanCPF[i]) * (11 - i);
    }

    let secondDigit = (sum * 10) % 11;
    if (secondDigit === 10) secondDigit = 0;

    if (secondDigit !== Number(cleanCPF[10])) return false;

    return true;
}
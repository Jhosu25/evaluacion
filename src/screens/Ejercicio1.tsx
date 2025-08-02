import React from 'react';

export const Ejercicio1 = () => {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    const pares = numeros.filter(num => num % 2 === 0);
    const impares = numeros.filter(num => num % 2 !== 0);

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2 style={{ color: "#6495ED" }}>BIENVENIDO</h2>
            <p><strong>Vector:</strong></p>
            <p>
                {numeros.map((num, i) => (
                    <span>
                        {num}
                        {i < numeros.length - 1 ? ', ' : ''}
                    </span>
                ))}
            </p>

            <p><strong>Pares:</strong></p>
            <p>
                {pares.map((num, i) => (
                    <span>
                        {num}
                        {i < pares.length - 1 ? ', ' : ''}
                    </span>
                ))}
            </p>

            <p><strong>Impares:</strong></p>
            <p>
                {impares.map((num, i) => (
                    <span>
                        {num}
                        {i < impares.length - 1 ? ', ' : ''}
                    </span>
                ))}
            </p>
        </div>
    );
};
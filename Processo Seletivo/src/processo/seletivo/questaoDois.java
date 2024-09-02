/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package processo.seletivo;

/**
 *
 * @author rafac
 */
public class questaoDois {
    
    public static boolean pertenceAFibonacci(int numero) {
        if (numero < 0) {
            return false;
        }
        int a = 0;
        int b = 1;

        while (a < numero) {
            int temp = a;
            a = b;
            b = temp + b;
        }

        return a == numero;
    }
}

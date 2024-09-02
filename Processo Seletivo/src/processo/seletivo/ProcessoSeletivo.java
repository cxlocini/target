package processo.seletivo;

import static processo.seletivo.questaoDois.pertenceAFibonacci;
import static processo.seletivo.questaoUm.calcularSoma;

/**
 *
 * @author rafac
 */
public class ProcessoSeletivo {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        //saida questão 1
        int indice = 13;
        
        int resultado = calcularSoma(indice);
        
         System.out.println("A resposta da questao um eh " + resultado);
         
         //saida questão 2
         int numero = 21;
         
         boolean pertence = pertenceAFibonacci(numero);
         
         if (pertence) {
            System.out.println("A resposta da questão dois é o número " + numero + " pertence à sequência de Fibonacci.");
        } else {
            System.out.println("A resposta da questão dois é o número " + numero + " não pertence à sequência de Fibonacci.");
        }
         
         
         
    }
    
}

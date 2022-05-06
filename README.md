# Teste e estudo decoradores Angular

Realizei este estudo com base na leitura e aplicação da documentação do Angular.
Link: https://angular.io/guide/inputs-outputs

### @Input() e @Output()

compartilham dados entre sí, pai pode mandar dados para o filho e vice-versa.

@Input() --> usado em um componente filho, uma maneira de se comunicar com o seu componente pai
permite que um componente pai atualize os dados do componente filho. Por outro lado, permite 
que o componente filho envie dados para um componente pai.

@Output() --> permite que os dados fluam do filho para o pai. Marca uma propriedade em um 
componente filho como uma porta pela qual os dados podem passar do filho para o pai.
O componente filho usa a propriedade para gerar um evento para notificar o pai sobre a alteração.

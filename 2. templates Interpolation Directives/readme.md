## Templates, Interpolation & Directives:

## 🔗 Templates:
A template is a form of HTML that tells Angular how to render the component. 

### ☞ Definding a Template in a component:
1. Inline template:
    ```
        template: "<h1>{{pageTitle}}</h1>"
    ```

    ES 2015 Back Tick
    ```
        template: `
        <div>
            <h1>{{pageTitle}}</h1>
            <div>My First Component</div>
        </div>

        `

    ```
2.  Linked Template:
    ```
    templateUrl: './product-list.component.html'
    ```
#### ☞ Binding:
Coordinates communication between the component's class and its templates and often involves passing data.

## 🔗 Interpolation:
- One way binding
- operation like concatation, calculation

Template
```
<h1>{{pageTitle}}</h1>                  # Template expression {{ }}
{{'Title: '+pageTitle}}         
{{2*20+1}}
<h1 innerText={{pageTitle}}></h1>
```

Class:
```
export class AppComponent {
    pageTitle: string = 'Ace mangemnt'
}
```

## 🔗 Directive:
Custom HTML element or attribute used to power up and extent our HTML.

Angular Built-in Directives:
1. Structural Directives:
    - Modifies the structure or layout of the view by adding, removin gor monipulating elements and thier childrens
    - eg.
        - *ngIf
        - *ngFor
    1. *ngIf
    ```
    <div class="table-responsive">
        <table class="table" *ngIf= "products.length">      # if only product list presents
            <thead>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
    ```

    2. *ngFor
    ```
    <tr *ngFor="let product of products">
        <td>{{ product.productName}}</td>
        <td>{{ product.productCode}}</td>
        <td>{{ product.releaseDate}}</td>
        <td>{{ product.price}}</td>
    </tr>
    ```
#### ☞ for..of VS for...in :
- for...of :
    - Iterates over iterable objects, such as an array.
    - ```
        let nicknames= ['li,'boo','punkeye']
        for(let nickname of nicknames) {
            console.log(nickname);
        }
      ```
    - Result: di,boo,punkeye

- for...in
    - iterates over the properties of an object (inerating over the index)
    - ```
        let nicknames= ['li,'boo','punkeye']
        for(let nickname in nicknames) {
            console.log(nickname);
        }
      ```
    - Results: 0,1,2
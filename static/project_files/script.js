
//loop through children of tbody
const children = $('tbody').children();

//convert children to an array
let children_array = [];
for(let i=0; i<children.length; i++){
    children_array.push(children[i]);
}

//build an array of objects
const items = [];
children_array.forEach(element => {
//    console.log(element.outerHTML);
//    console.log(element.getAttribute('data-name'));
    const rowDetails = {
    name: element.getAttribute('data-name'),
    size: parseInt(element.getAttribute('data-size')),
    time: parseInt(element.getAttribute('data-time')),
    html: element.outerHTML
};
    items.push(rowDetails);
});
//console.log(items);

//Sort status
const sortStatus = {
    name: 'none', //none,up, down
    size: 'none', //none,up, down
    time: 'none' //none,up, down
};
const sort = (items, option, type) => {
    items.sort((item1, item2) => {
        let value1, value2;
        if(type === 'name'){
            value1 = item1.name.toUpperCase();
            value2 = item2.name.toUpperCase();
            
        }else if(type === 'size'){
            value1 = item1.size;
            value2 = item2.size;
        }else{
            value1 = item1.time;
            value2 = item2.time;
        }
        
        if(value1 < value2){
            return -1;
        }
        if(value1 > value2){
            return 1;
        }
        //equal values
        return 0;
    });
    //reverse the array if the option is down
    if(option === 'down'){
        items.reverse();
    }
};


//fill table body with items
const fill_table_body = itmes => {
    const content = itmes.map(element => element.html).join('');
    console.log(content);
    $('tbody').html(content);
};

//event listeners
document.getElementById('table_head_row').addEventListener('click', event => {
    if(event.target){
        //clear icons
        $('ion-icon').remove();

        if(['none','down'].includes(sortStatus[event.target.id])){
            //sort in ascending order
            sort(items, 'up', event.target.id);
            sortStatus[event.target.id] = 'up';
            //add icon
            event.target.innerHTML += ' <ion-icon name="arrow-dropup-circle"></ion-icon>';
        }
        else if(sortStatus[event.target.id] === 'up'){
            //sort in descending order
            sort(items, 'down', event.target.id);
            sortStatus[event.target.id] = 'down';
            //add icon
            event.target.innerHTML += ' <ion-icon name="arrow-dropdown-circle"></ion-icon>';
        }
        fill_table_body(items);
    }
});











/*//sorting of array in js
console.log('hello');
console.log([1,5,3].sort());

console.log(['a','b','c'].sort());
console.log([{name:'john',age:40},{name:'sara', age:34},{name:'Mark',age: 35}].sort((person1, person2) => {
//    const name1=person1.name.toUpperCase();
//    const name2=person2.name.toUpperCase();
    const name1=person1.age;
    const name2=person2.age;
    if(name1<name2){
        return -1;
    }
    if(name1 > name2){
        return 1;
    }
    //equla names
    return 0;
}).reverse());   //reverse is for descending order
*/


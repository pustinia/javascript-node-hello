// The Object in javascript

const article = {
    title : 'new title',  // property
    author : 'kim',
    createDate : new Date(),
    tags : ['coding','node','good'],
    print : function () {  // method
        return 'hello';
    }
};

console.log(article.title);
article.author = 'lee';
console.log(article.author);
console.log(article.print());

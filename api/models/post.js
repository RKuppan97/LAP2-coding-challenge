const db = require('../dbConfig')

class Post {
    constructor(data){
        this.id = data.id
        this.title = data.title
        this.name = data.name 
        this.body = data.body
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const postsData = await db.query(`SELECT * FROM posts;`)
                const posts = postsData.rows.map(x => new Post(x))
                resolve(posts);
            } catch (err) {
                reject("Error retrieving posts")
            }
        })
    }

    static create(title, name, body) {
        return new Promise (async (resolve, reject) => {
            try {
                let newPostData = await db.query(`INSERT INTO posts (title, name, body) VALUES ($1, $2, $3) RETURNING *;`, [title, name, body]);
                let newDog = new Post(newPostData.rows[0]);
                resolve (newPost)
            } catch {
                reject('Error creating new post')
            }
        })
    }

    static findById(id) {
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query(`SELECT * FROM posts WHERE id = $1;`, [ id ]);
                let post = new Post(postData.rows[0]);
                resolve (post);
            } catch (err) {
                reject('Post not found');
            }
        });
    }
}

module.exports = Post ; 
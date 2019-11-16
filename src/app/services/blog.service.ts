import { Subject } from 'rxjs/Subject';

export class BlogService {

    id: number = 4;
    
    postsSubject = new Subject<any[]>();
    
    private posts = [
        {
          id: 1,
          title: 'Lorem ipsum dolor sit amet (Article 01)',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          loveIts: 0,
          created_at: '10/27/2019 11:00 AM',
        },
        {
          id: 2,
          title: 'Consectetur adipiscing elit (Article 02)',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          loveIts: -1,
          created_at: '10/27/2019 11:00 AM',
        },
        {
          id: 3,
          title: 'Sed do eiusmod tempor (Article 03)',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          loveIts: 7,
          created_at: '10/27/2019 11:00 AM',
        }
    ]; 

    emitPostsSubject() {
      this.postsSubject.next(this.posts.slice());
    }

    addPost(title: string, content: string) {
      const blogObject = {
        id: 0,
        title: '',
        content: '',
        loveIts: 0,
        created_at: ''
      };
      blogObject.id = this.id;
      blogObject.title = title;
      blogObject.content = content;
      const currentTime = new Date();
      blogObject.created_at = currentTime.toString();
      this.id++;
      
      this.posts.push(blogObject);
      this.emitPostsSubject();
  }

  deletePost(id: number) {
    const index = this.posts.map(function(e) { return e.id; }).indexOf(id);
    this.posts.splice(index, 1);
    this.emitPostsSubject(); 
  }

  addLoveIts(id: number){
    const index = this.posts.map(function(e) { return e.id; }).indexOf(id);
    this.posts[index].loveIts++;
    this.posts.sort((a, b) => (a.loveIts > b.loveIts) ? -1 : 1);
    this.emitPostsSubject();
  }

  subtractLoveIts(id: number){
    const index = this.posts.map(function(e) { return e.id; }).indexOf(id);
    this.posts[index].loveIts--;
    this.posts.sort((a, b) => (a.loveIts > b.loveIts) ? -1 : 1);
    this.emitPostsSubject();
  }

}
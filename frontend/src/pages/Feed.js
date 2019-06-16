import React, { Component } from "react";
import api from "../services/api";

import "./Feed.css";

import more from "../assets/more.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";

class Feed extends Component {
  async componentDidMount() {
    const response = await api.get('posts');
  }
  render() {
    return (
      <section id="post-list">
        <article>
          <header>
            <div className="user-info">
              <span>Edvaldo Mantovanelli</span>
              <span className="place"> Vila Velha</span>
            </div>
            <img src={more} alt="Mais" />
          </header>
          <img src="http://localhost:3333/files/Capturar.jpg" alt="Imagem" />

          <footer>
            <div className="actions">
              <img src={like} alt="" />
              <img src={comment} alt="" />
              <img src={send} alt="" />
            </div>
            <strong>900 curtidas</strong>

            <p>
              Um post bem legal
              <span>#react #instaed</span>
            </p>
          </footer>
        </article>
      </section>
    );
  }
}

export default Feed;

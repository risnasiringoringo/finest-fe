import { useEffect } from "react";
import AOS from "aos";

export const EducationDetail = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);
  return (
    <>
      {/* Blog Details Section */}
      <section id="blog-details" className="blog-details section">
        <div className="page-title" data-aos="zoom-out">
            <div className="container position-relative">
                <h1>Education Content</h1>
                <p>
                Esse dolorum voluptatum ullam est sint nemo et est ipsa porro
                placeat quibusdam quia assumenda numquam molestias.
                </p>
                <nav className="breadcrumbs">
                <ol>
                    <li>
                    <a href="/">Home</a>
                    </li>
                    <li>
                    <a href="/education">Education</a>
                    </li>
                    <li className="current">Education Content</li>
                </ol>
                </nav>
            </div>
        </div>
        <div className="container">
          <article className="article">
            <div className="post-img">
              <img
                src="assets/img/portfolio/app-1.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <h2 className="title">
              Dolorum optio tempore voluptas dignissimos cumque fuga qui
              quibusdam quia
            </h2>
            <div className="meta-top">
              <ul>
                <li className="d-flex align-items-center">
                  <i className="bi bi-person" />{" "}
                  <a href="blog-details.html">John Doe</a>
                </li>
                <li className="d-flex align-items-center">
                  <i className="bi bi-clock" />{" "}
                  <a href="blog-details.html">
                    <time dateTime="2020-01-01">Jan 1, 2022</time>
                  </a>
                </li>
              </ul>
            </div>
            {/* End meta top */}
            <div className="content">
              <p>
                Similique neque nam consequuntur ad non maxime aliquam quas.
                Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea
                dolorem doloremque deleniti aperiam unde soluta. Est cum et quod
                quos aut ut et sit sunt. Voluptate porro consequatur assumenda
                perferendis dolore.
              </p>
              <p>
                Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non
                reiciendis. Sequi in accusamus harum vel aspernatur. Excepturi
                numquam nihil cumque odio. Et voluptate cupiditate.
              </p>
              <blockquote>
                <p>
                  Et vero doloremque tempore voluptatem ratione vel aut.
                  Deleniti sunt animi aut. Aut eos aliquam doloribus minus autem
                  quos.
                </p>
              </blockquote>
              <p>
                Sed quo laboriosam qui architecto. Occaecati repellendus omnis
                dicta inventore tempore provident voluptas mollitia aliquid. Id
                repellendus quia. Asperiores nihil magni dicta est suscipit
                perspiciatis. Voluptate ex rerum assumenda dolores nihil
                quaerat. Dolor porro tempora et quibusdam voluptas. Beatae aut
                at ad qui tempore corrupti velit quisquam rerum. Omnis dolorum
                exercitationem harum qui qui blanditiis neque. Iusto autem
                itaque. Repudiandae hic quae aspernatur ea neque qui. Architecto
                voluptatem magni. Vel magnam quod et tempora deleniti error
                rerum nihil tempora.
              </p>
              <h3>Et quae iure vel ut odit alias.</h3>
              <p>
                Officiis animi maxime nulla quo et harum eum quis a. Sit hic in
                qui quos fugit ut rerum atque. Optio provident dolores atque
                voluptatem rem excepturi molestiae qui. Voluptatem laborum omnis
                ullam quibusdam perspiciatis nulla nostrum. Voluptatum est
                libero eum nesciunt aliquid qui. Quia et suscipit non sequi.
                Maxime sed odit. Beatae nesciunt nesciunt accusamus quia aut
                ratione aspernatur dolor. Sint harum eveniet dicta
                exercitationem minima. Exercitationem omnis asperiores natus
                aperiam dolor consequatur id ex sed. Quibusdam rerum dolores
                sint consequatur quidem ea. Beatae minima sunt libero soluta
                sapiente in rem assumenda. Et qui odit voluptatem. Cum quibusdam
                voluptatem voluptatem accusamus mollitia aut atque aut.
              </p>
              
              <h3>Ut repellat blanditiis est dolore sunt dolorum quae.</h3>
              <p>
                Rerum ea est assumenda pariatur quasi et quam. Facilis nam porro
                amet nostrum. In assumenda quia quae a id praesentium. Quos
                deleniti libero sed occaecati aut porro autem. Consectetur sed
                excepturi sint non placeat quia repellat incidunt labore. Autem
                facilis hic dolorum dolores vel. Consectetur quasi id et optio
                praesentium aut asperiores eaque aut. Explicabo omnis quibusdam
                esse. Ex libero illum iusto totam et ut aut blanditiis.
                Veritatis numquam ut illum ut a quam vitae.
              </p>
              <p>
                Alias quia non aliquid. Eos et ea velit. Voluptatem maxime enim
                omnis ipsa voluptas incidunt. Nulla sit eaque mollitia nisi
                asperiores est veniam.
              </p>
            </div>
            {/* End post content */}
            <div className="meta-bottom">
              <i className="bi bi-folder" />
              <ul className="cats">
                <li>
                  <a href="#">Admin</a>
                </li>
              </ul>
            </div>
            {/* End meta bottom */}
          </article>
        </div>
      </section>
      {/* /Blog Details Section */}
    </>
  );
};

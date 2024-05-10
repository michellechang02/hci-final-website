import React from "react";
import { Text, Heading, Center, VStack } from "@chakra-ui/react";
import design2 from "./images/design2.png";
import checkout_initial from "./images/checkout_initial.png";
import quiz_initial from "./images/quiz_initial.png";
import find_initial from "./images/find_initial.png";
import home_initial from "./images/home_initial.png";
import compare_initial from "./images/compare_initial.png";
import final_design from "./images/final_design.png";
// import design2 from "./images/design2.png";
// import design2 from "./images/design2.png";

function Design(props) {
  return (
    <Center>
      <VStack spacing={5} textAlign="left" ml={20} mr={20} p={20} width={1000}>
        <Heading fontSize={40}>Design Learnings</Heading>
        <Text>
          All of us individually have had struggles in the world of skincare.
          Talking to others, this struggle is not just limited to us. Rather, it
          is a much more universal struggle. In particular, we have identified
          our struggle to stem from three main sources: overwhelming choices,
          lack of personalization, and time-consuming searches that often end in
          frustration. We've spent hours browsing through countless products,
          each claiming to be the best. We're unsure about our skin type, the
          ingredients we should look for, and whether these products will even
          work for us. Our frustration grows as our skincare journey turns into
          a confusing chore.
        </Text>
        <Text>
          Our solution:{" "}
          <Text as="span" fontWeight="bold">
            SkinMatcher
          </Text>
        </Text>
        <Heading fontSize={24}>User Research/Ideation</Heading>
        <Text>
          Initially, our project was “LazyTravelers”. This was an interface
          meant to aid travelers find places to stay/things to do. As we
          proceeded on the design process, we found that we were all more
          interested in something else and this idea did not particularly speak
          to us. After researching traveling applications for ideas, we found a
          large quantity of already powerful apps on the market. Google Travel,
          Airbnb, and Expedia already had a large number of features that could
          make ecotourism easy and affordable. However, upon searching for
          skincare applications, we weren't able to find any that could directly
          compare different Skin Care brands such as Amazon, Sephora, Ulta
          Beauty, and etc. As a more underrated topic, we wanted to focus on
          making skincare more affordable by creating a powerful, back-end heavy
          application that ties these various brands together through their
          datasets. We found that we instead all had a much more interest in
          skincare as well as familiar problems. Thus, on our pivot, we by
          brainstorming potential user groups to target, main issues, and how to
          solve those issues.
        </Text>
        <Text>
          After conducting many interviews, asking people about their routines,
          concerns, and challenges, we found that there is an extremely wide
          variety of people who use skincare, all of whom have differing needs
          and concerns. Below include quotes from our interviewees highlighting
          such differences:
        </Text>
        <Text>
          “When shopping for skincare products, I care most about the price. I
          don’t like wasting my money on skincare, so I want it to be
          affordable” “I research skin care products by asking my dermatologist
          every time I have an acne breakout, but I generally just go back to
          plain hand soap because I am lazy.” “I research skin care products by
          talking with my friends at coffee shops or while I’m at the hair
          salon.” “My skincare routine is washing my face with Fresh exfoliator
          and face wash. Then, I put on Bobbi Brown’s Hydrating Face Tonic, and
          put on Estee Lauder’s Perfectionist lotion. Finally, I put on the
          foundation from Shiseido which has SPF. At night, I wash my face again
          with La Roche Posay and Origins scrub cleanser. “ “I research skin
          care products by watching Youtube makeup beauty channels or getting
          recommendations from the non-toxic nail salon.” “When shopping for
          skincare products, I care the most about quality and whether the nail
          polish company matches my own philosophy. I like eco-friendly shops
          that have a low carbon footprint. For instance, for nails, Raw Lab Spa
          in Philadelphia uses non-toxic nail products, so I frequent the shop.”
        </Text>
        <Heading fontSize={24}>User Persona</Heading>
        <Text>
          We found that oftentimes the “User Persona” for any skincare product
          is overwhelmingly female and young. While this may certainly represent
          a significant portion of the typical target demographic, we wanted our
          app to be accessible to anyone of any gender and age. Still, we
          understood that regardless of what we designed for, our likeliest
          demographic was that young female. Thus, while she was the user
          persona we employed while designing our site, we took special care to
          keep in mind others as well. This guided us in our design process as
          we made sure to keep the site simple, well lit, static in appearance
          but also highly navigable and intuitive.
        </Text>
        <Heading fontSize={24}>Early Sketches</Heading>
        <Text>
          We had two early sketches of what our web application would look like.
          Sketch 1:{" "}
        </Text>
        <Text>Sketch 2:</Text>
        <img
          src={design2}
          alt="design2"
          style={{
            maxWidth: "80%",
            maxHeight: "80%",
            width: "auto",
            height: "auto",
          }}
        />
        <Text>
          We conducted more user research to flesh out our interface. For
          interface 1: Emphasized comparison/quiz features Felt more inclusive
          Better tailored to individual users Doesn’t really emphasize special
          features: comparisons/quizzes. For interface 2: Extensive features and
          high freedom Intuitive Very similar to amazon Might be hard to
          navigate The final prototype design incorporated feedback from both
          Prototype 1 and Prototype 2 evaluations, aiming to tailor the website
          application specifically to skincare. To differentiate from top
          resellers like Amazon, we integrated the personalized skincare quiz
          from Prototype 2 onto Prototype 1's extensive features. This addition,
          along with features like product filtering and comparison, emphasized
          the specialization in personalized skincare. Addressing navigation
          concerns from Prototype 2 evaluation, we redesigned the navigation bar
          for improved usability, opting for a top-of-the-page layout with clear
          tabs like Quiz and Products. Additionally, we personalized the user
          experience further by including the user's name in features such as
          Top 3 Picks and Trending Products in their local area, enhancing user
          engagement and relevance.
        </Text>
        <Text>Here's our final prototype interface.</Text>
        <img
          src={final_design}
          alt="final_proto"
          style={{
            maxWidth: "80%",
            maxHeight: "80%",
            width: "auto",
            height: "auto",
          }}
        />
        <Heading fontSize={24}>Hi-Fi Prototyping</Heading>
        <Text>
          We wanted our website to have a cooling and calm atmosphere. Thus,
          this was our initial mood board.
        </Text>
        <Text>
          We wanted to emphasize natural and grounded colors like brown, gray,
          and a soft yellow. Implementing our Lo-Fi prototype into Hi-Fi via
          Figma resulted in the following pages:
        </Text>
        <Text>Home:</Text>
        <img
          src={home_initial}
          alt="home"
          style={{
            maxWidth: "80%",
            maxHeight: "80%",
            width: "auto",
            height: "auto",
          }}
        />
        <Text>Quiz:</Text>
        <img
          src={quiz_initial}
          alt="quiz"
          style={{
            maxWidth: "80%",
            maxHeight: "80%",
            width: "auto",
            height: "auto",
          }}
        />
        <Text>Find:</Text>
        <img
          src={find_initial}
          alt="find"
          style={{
            maxWidth: "80%",
            maxHeight: "80%",
            width: "auto",
            height: "auto",
          }}
        />
        <Text>Compare:</Text>
        <img
          src={compare_initial}
          alt="compare"
          style={{
            maxWidth: "80%",
            maxHeight: "80%",
            width: "auto",
            height: "auto",
          }}
        />
        <Text>Checkout: </Text>
        <img
          src={checkout_initial}
          alt="checkout"
          style={{
            maxWidth: "80%",
            maxHeight: "80%",
            width: "auto",
            height: "auto",
          }}
        />
        <Text>
          Based on our in-class review of the prototype, we came to the
          following conclusions: The feedback indicates that while the website
          is visually appealing, it lacks usability in its current state. Users
          found it challenging to browse items due to the restrictive structure,
          which primarily focuses on comparisons or quiz-based product
          selection. Complaints about font size and color suggest readability
          issues. The main takeaway is the need for the site to feel more open
          and flexible. Users feel confined by its rigidity and the necessity to
          navigate to other sites for purchases, undermining the SkinMatcher
          experience. Dynamic implementation is crucial to address these
          concerns, allowing for free-flowing product exploration and user
          autonomy. Considerations about implementation include exploring
          automatic checkout integration with platforms like Amazon, Sephora,
          and Sociolla to enhance user experience and minimize the site's
          perceived role as a middleman.
        </Text>
        <Text>The original and changed version can be seen as such:</Text>
        <Heading fontSize={24}>More Revision</Heading>
        <Text>
          Engaging with our high-fidelity prototype and conducting an evaluation
          session with two members of our target user group yielded valuable
          insights, highlighting both strengths and areas for improvement in our
          design. Positive feedback was received for the simple, user-friendly
          navigation, well-distributed white space, and minimalist design, which
          provided a relaxing and user-focused browsing experience. However,
          participants also pointed out important details that need
          reconsideration. They noted that while text adjustments enhanced
          aesthetics, they sometimes hindered understanding, suggesting the
          exploration of more legible typefaces while retaining elegance.
          Additionally, users felt the checkout page lacked interactivity,
          particularly the absence of quantity adjustment options, essential for
          bulk purchasing common among our user group. Confusion between the
          "Products" and "Browse" tabs was highlighted, potentially deterring
          users seeking efficient navigation. Clearer distinction between these
          functions is needed to streamline the browsing experience. A
          significant suggestion was the inclusion of individual product pages
          akin to those on Amazon, featuring detailed descriptions, user
          reviews, and accessible sales information. This aligns with user
          expectations for comprehensive product information, particularly
          regarding ingredients. These insights guide the next iteration,
          emphasizing the balance of minimalism with functionality and clear
          information architecture to meet and surpass user expectations.
        </Text>
        <Heading fontSize={24}>Initial Implementation into React</Heading>
        <Text>
          We made a bare-bones implementation of the above prototype to get a
          better feel of navigation and how it would look as an actual website
          on a computer. Once we finished the very core interfaces, we received
          the following feedback.
        </Text>
        <Heading fontSize={24}>Initial TA evaluation:</Heading>
        <Text>
          Synthesized Notes: Maybe improve the production value of the website
          by bolstering the recommendation algorithm with user feedback and
          considering more factors in the quiz I know a startup that also had
          the same idea, how can you make your application unique in the
          skincare market. Maybe incorporate interactive elements to make it
          more engaging, user-friendly Also, make sure to protect user privacy
          by outlining somewhere in your product the user agreement before
          taking the quiz. Evaluator 1: Sharon Lee Upon loading, the visual
          appeal is strong, but incomplete sections detract. Product images may
          be too small, requiring a closer look. Font readability is an issue,
          being too light in places. In the quiz, clarity is lacking on the
          number bar's color correlation. 100's dryness meaning is unclear,
          affecting choices. Users desire the ability to retake the quiz without
          reloading. While recommendations are good, improvements are needed for
          clarity on parameters like "100 sunlight". Sharon's proposed changes
          are expected to refine the final version. Recommended product
          presentation will follow the original design, with tweaks based on
          feedback. Evaluator 2: Elizabeth Trang Understands the site's intended
          vibe but finds it somewhat sterile. Dislikes the color scheme and
          prefers more vibrancy. Font size and color are problematic. Navigation
          is clear, particularly with the navbar. However, the quiz presents
          similar issues with the number bar's function, suggesting alternatives
          like a gradient bar or clearer labeling. Suggestions include using
          options instead of a numerical scale and adding an "I'm not sure"
          option. More options under "Looking for" are desired, potentially
          through a dropdown menu. Improvements are sought for the quiz
          experience, including a smoother way to retake it and linking
          recommendations directly to products for easier access.
        </Text>
        <Heading fontSize={24}>Professor Evaluation</Heading>
        <Text>
          Our primary takeaway from talking to Professor Head was that we needed
          to emphasize and make clear the story that our interface was trying to
          tell. At the time, we had many features that muddled the overall goal
          of fixing the three aforementioned issues: noise, personalization, and
          comparison. On his recommendation (and our agreement), we decided to
          omit the checkout/cart as well as pivot our focus from the backend
          recommendation algorithm to the visual quizzes and comparison aspect
          of the site. This would allow us to better hammer home that our goal
          was to fix exactly the noise, personalization, and comparison issues.
          Our product would be the best at that.
        </Text>
        <Heading fontSize={24}>Implementation</Heading>
        <Text>
          Our implementation relies on a React frontend, Node/Express backend,
          and a Supabase database. Our backend and database work to fetch
          recommendations as well as store the personalized information of every
          user. This allows us to better recommend and reduce noise for every
          user. Regarding the frontend, we finalized our website with the
          following pages: Home, Search, Products, Quizzes, Compare, Profile,
          Login/Logout. Of these pages, we highlight quizzes and comparison.
          These two pages make us stand out and are our solutions to noise, lack
          of personalization, and hard comparisons. By allowing a user to simply
          ask a few questions and receive a recommendation, we are taking away
          the huge amount of noise blasted at every prospective skincare user
          and providing them with a trusted product that we know will work for
          them. This additionally allows us to personalize a routine for the
          user. Our compare page, utilizing an intuitive and highly visual
          interface to display price, brand, image, and name, provides the user
          an easy way to compare various skincare products–we chose these fields
          in particular as they came up most often in our user research as areas
          of importance.
        </Text>
        <Heading fontSize={24}>Moving Foward</Heading>
        <Text>
          There is a lot to do in understanding everyone who uses skincare
          products and much more to do. Through our design process, we hope that
          we were able to help bridge the gap between novices just getting into
          the game and gurus who know the industry inside and out. Regardless,
          there is still more that is unknown and unexplored in this world.
          Everyone is different. From their skin to their priorities, more
          innovation is needed to find a solution which provides a clearer path
          for everyone. We truly appreciate the help from the course staff, our
          peers, and our user interviewees. Thanks for reading!
        </Text>
      </VStack>
    </Center>
  );
}

export default Design;

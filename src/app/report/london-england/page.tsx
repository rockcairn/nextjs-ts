import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - London, England',
  keywords: ['London', 'England'],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            London Trip Nov. 27 - Dec. 03, 2002
          </h1>
        </li>
        <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="../trips"
          >
            Back to Trips
          </Link>
        </li>
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/london_019.jpg"
          alt="Buckingham Palace in London"
          width={200}
          height={149}
          priority
        />
      </div>
      <span className="caption">(Buckingham Palace in London)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2"></h2>
          <p>
            I have a breakdown of the events that I did each day below, but here
            are some general observations during the trip. The pollution in the
            tubes really started to bother me towards the end of the trip. The
            escalators move twice as fast as the ones in the US. The population
            seemed to be thinner then the general US population. The parks get a
            lot of use, in the otherwise crowded city. The work hours seem to be
            later in the morning, a 9:00 to 6:00 work schedule seems to be the
            norm. There seemed to be a scheduled of coffee and pastry in the
            morning before work and a beer and socializing after work. I did a
            lot of walking in London and walking was a good way to get across
            the city if you did not want to ride the tube for everything,
            walking was easy coming from a mile high city to a sea level city.
          </p>
          <p>
            My basic day involved getting up, have breakfast at the hotel,
            taking a walk in the morning until the tube price dropped and then
            seeing a couple major tourist attractions. On a number of days I
            managed email home for free at libraries. Every night I would spend
            time writing down in a journal what I saw that day, as well as going
            over my itinerary for the next day,&nbsp; read through some guide
            book about what I would see, and watching some British News on TV.
          </p>
          <p>
            <NotImplemented label="View Slideshow" />
          </p>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles">
                  Tuesday
                </td>
                <td width="10%">6:30AM</td>
                <td width="80%">-Arrive at Work.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9:30AM</td>
                <td>
                  -Discover that Mike can not go because of a passport issue.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>12:00PM</td>
                <td>-Decide to go by myself, driven to the airport by Val.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>2:30:PM</td>
                <td>
                  -Original (1:45PM) flight through Chicago, O&apos;Hare was Delayed
                  because of weather.
                  <br />
                  -New flight through Washington, Dulles.
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Wednesday</td>
                <td>9:35AM</td>
                <td>-Land at London Heathrow.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>11:30AM</td>
                <td>
                  -Arrive at the hotel via the tube. Then Library -email, Hyde
                  Park, Harrods.&nbsp;
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Thursday</td>
                <td>7:30AM</td>
                <td>
                  -Morning walk through Hyde Park, Marble Arch, Bond Street.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10:30AM</td>
                <td>
                  -Tower of London, walk past St. Paul&apos;s, Ye old Chester Cheese
                  bar.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>6:00PM</td>
                <td>
                  -Oxford circus walk through SOHO with Max, Pizza Express,
                  O&apos;Neil&apos;s music room.
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Friday</td>
                <td>9:00AM</td>
                <td>
                  -Tube to St. James, St James park, Buckingham Palace -changing
                  of the guard, Westminster Abbey, Parliament and Big Ben.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>12:00PM</td>
                <td>-Fish and Chips, Trafalgar Square, National Gallery.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>6:00PM</td>
                <td>-Supper in Richmond with Max.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>
                <td>8:00AM</td>
                <td>
                  -Tube to Holborn, walk to Russell Square meet Max and Nicola.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10:30AM</td>
                <td>
                  -British Museum, All One Bar Lunch, Black Market Records,
                  Costa Coffee.
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Sunday</td>
                <td>8:15AM</td>
                <td>
                  -Tube and Light Rail to Greenwich, Maritime Museum, Royal
                  Observatory
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>6:00PM</td>
                <td>-Bazaaro&apos;s Italian Restaurant.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Monday</td>
                <td>8:00AM</td>
                <td>
                  -Walk through Hyde Park to Notting Hill Gate Tube Stop, walk
                  Portobello Market.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9:00AM</td>
                <td>
                  -Tube to Kings Cross, British Library, Forbidden Plant store,
                  shopping.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>12:00PM</td>
                <td>
                  -Tube to Blackfriars, Millenium Bridge to Tate Modern Museum,
                  Mulligans Restaurant.
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Tuesday</td>
                <td>6:00AM</td>
                <td>
                  -Tube to Heathrow Airport, Flight back through Chicago,
                  O&apos;Hare.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>4:30PM</td>
                <td>-Back in Denver, picked up by sister.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>
            <span className="climbing-h2">
              Tuesday, November 26,{' '}
            </span>
            <br />
            This day started out with the anxiousness and excitement of
            traveling out of the country. The last time I went to Europe was
            back in the Summer of 1990. The day started off with the promise of
            a great adventure and then had a couple hiccups along the way. I
            arrived at work, planning to work a half-day and then go to the
            airport. I arrived at work and found out about three hours before my
            plane was to leave Denver that my traveling buddy, Mike, had a
            passport issue. It seems that in order to gain entrance into another
            country that you need to have a passport that is good for your
            travel stay as well as an additional 6 months, Mike&apos;s was good for
            the trip but expired at the end of December. Instead of risking it,
            Mike decided to cancel his plans to travel. I was left with
            uncertainty and eventually decide to go, with the encouragement of
            some other co-workers.
          </p>
          <p>
            At this point I had less time to make it to the airport. I made it
            to the airport thinking that I needed to make a flight that would
            leave in 45 minutes, so I was a little rude and jumped up to the
            first class counter. I was relieved at this point to find out that I
            had an additional hour to make my plane, because I would now be
            routed through the Washington Dulles airport, as the Chicago Airport
            was having weather related problems. Once I made it to my gate I
            called my sister to relay all this new information to the family. I
            ran into some old church friends at the gate who were just going on
            the Washington leg of my trip. At this point I was finally settling
            down and then started feeling hungry, bummer I was on a snack only
            flight.
          </p>
          <p>
            Once in Washington I bought an over priced sandwich and lemonade.
            The new set of flights that I was taking to London would put me into
            London 2 hours after my previous planed flights.
          </p>
          <p>
            <span className="climbing-h2">
              Wednesday, November 27,
            </span>
            <br />I arrived in London and went through the customs entrance
            queue without a problem, the only thing of interest was that they
            asked me where I was staying. I did not declare anything on entrance
            to London, and hoped that was the right thing to do. I found the
            tube without a problem, I just followed the rest of the crowd.
            Almost all of the tube stops have charge card tube pass machines now
            which make getting a travel card easy.&nbsp; I managed to figure out
            how to get to the Paddington station via and tube change at Earl&apos;s
            Court, however it took me a while to figure out how to find the
            right train at Earl&apos;s Court. One thing that would become apparent
            after a couple days riding the tube is that the tube map can not be
            overlaid on a real map and that you should forget about trying to
            keep your NESW sense of direction...just follow the signs.
          </p>
          <p>
            I arrived at my hotel, explained my situation of being just one
            person instead of two, and arranged to get a double bed instead of
            two singles. I had to put my luggage into a closet until the room
            was ready and I could actually check in.&nbsp; While waiting I went
            to the tube stop to get a travel card for zones one and two, at this
            point I was tired and a little unsettled. I dropped some money and
            my tube pass trying to figure out what was in all of my pockets, a
            transportation representative helped me out. I did not have a chance
            to get into my room and organized all the stuff I would be carrying
            or leaving at the hotel. I managed to travel on the tube and find a
            library, which like in the US has free internet access, and emailed
            home. I then checked out Hyde Park and went back to the hotel the
            check in.
          </p>
          <p>
            After checking in, I took the tube to Harrods to check out the store
            who&apos;s slogan is, &quot;We&nbsp; have everything.&quot; The store was
            decorated for Christmas and had the greatest window displays. There
            was a Bentley and chauffeur waiting outside one exit; its it not
            every day in the US that you see a Bentley. One observation about
            automobiles is that most people either drive a small fuel efficient
            vehicle or they drive a luxury, there is no middle ground.&nbsp;
            After checking out the store I walk down the street past the Prince
            Albert Museum. After taking the tube back to the hotel, I had supper
            at the Swan pub, which was down the street from the hotel just
            across from Hyde Park.
          </p>
          <p>
            <span className="climbing-h2">
              Thursday, November 28,{' '}
            </span>
            <br />
            This day started off with a walk through Hyde Park down to the
            Marble Arch. After figuring out that the Tube travel pass card was
            cheaper after 9:00AM, I figured out that a walking in the morning
            was the best thing to do while waiting for a cheaper tube pass. This
            morning I found a small ice skating rink at the Marble Arch, and
            continued my walk down the street to Bond. This morning was when I
            first started noticing all the Starbuck Coffee houses that are
            located only a block apart.&nbsp; Because London is such an old
            city, you can just walk down the street and see cool architecture
            everywhere. There was an interesting bar near the Bond Street tube
            stop that I peered into, and thought that it would be nice to stop
            by later. I continued my walk to Hanover Square before making my way
            to the Oxford Circus tube station.
          </p>
          <p>
            After taking the tube to Tower Hill, I started my major tourist site
            for the day with the Tower of London. I spent about 3 hours at the
            Tower of London, listening to the beefeaters (Yeoman) explain some
            of the history of the grounds. There was a lot of be-heading at the
            tower, mostly women. The seven ravens that are on the ground also
            had a cool story. Other interesting things to learn from include the
            armory, Roman presence in London, and the large number of
            miniature/scaled representations of the Tower of London grounds that
            showed the changes of the tower of the years. The Crown Jewels,
            which included the gold maces and gold orbs where interesting to
            look at. The gold orb reminded me of, &quot;The Holy Hand
            Grenade,&quot; from the movie, &quot;Monty Python and the Holy
            Grail&quot;. Although there were a number of tourist and this site,
            there were also a lot of school children in their school uniforms.
          </p>
          <p>
            At this point I started my afternoon stroll through the city of
            London, which started at Cannon Street tube stop and ended at
            Trafalgar Square.&nbsp; Along the way I stopped for a sandwich at a
            Pret-A-Manger, I decided to &quot;stay in&quot;, vs. &quot;take
            away.&quot; Which reminds me that when you are in the tube you look
            for the &quot;way out&quot; instead of an &quot;exit&quot;. I also
            checked out the Millennium Bridge, St. Paul&apos;s Cathedral, Ye Old
            Chester Cheese pub, and an ice skating rink setup at Kings College
            and the Summerset House Courtyard.&nbsp;I found my internet
            connection at the Shoe Library this day and emailed home again.
          </p>
          <p>
            In the evening I enjoyed people watching at the Russell Square tube
            stop, near the Nike store, while waiting to meet up with Max Rutch.
            Max is a former co-worker who I met at Trip.com and is now living in
            the London area with his English wife Nicola. Max walked me through
            SOHO and on to Piccadilly Circus where we met up with his wife and a
            friend that he knew for supper at Pizza Express. Supper was the
            first time I really saw the English eat with a utensil in each hand,
            never letting go of either of them...its pizza. I at first cut my
            pizza into slices and then picked up the slices by hand, then
            realizing I was the only person doing this I decide to do it the
            English way. After supper we walked down the street O&apos;Neil&apos;s Music
            Room to watch a live performance from a band that was lead by a
            friend of a friend of a friend.
          </p>
          <p>
            <span className="climbing-h2">
              Friday, November 29,{' '}
            </span>
            <br />
            After a late night the previous day, I decided to sleep in. When I
            did get up I started the day by getting to the St. James tube stop
            and walking through St. James Park over to Buckingham Place where I
            waited for the changing of the the guard. Today had to be the most
            tourist trap filled day on my trip. Tour buses practically stop and
            drop off the masses at the palace for the changing of the guard. The
            number of cultures represented there was huge. I managed to find a
            close enough spot to the gate to see most of the action. I waited
            around for an hour before the action started and then stayed for
            about 45 minutes of the hour event. I then walked back through St.
            James Park to Westminster Abbey. Again the Abbey had a lot of people
            waiting to get in. The Abbey was interesting, with a lot of history
            and dead people. It is a good thing that they no longer bury people
            there, otherwise there would be no room left to actually hold a
            church service. Visiting the Poets Corner was one of the most
            rewarding parts of going through the Abbey (Geoffrey Chaucer,
            William Shakespeare, George Frederick Handel, Jane Austen, and
            Charles Dickens, graves and memorials).&nbsp;
          </p>
          <p>
            Next, I got my pictures of Big Ben, Parliament, and the Eye of
            London. I continued my walk toward Trafalgar Square and stopped at a
            local to get Lunch, fish and chips. While eating at the local I had
            a very interesting conversation with a couple that had come into
            London from about 2 hours North of the city to do some site seeing
            themselves. After lunch, I continued to Trafalgar Square, past the
            Horse Guard and Admiralty Arch. The square was alive with people and
            pigeons. It seems that people had a hard time reading the please do
            not feed the pigeons signs that were everywhere. Like a lot of the
            London area, this area too was under restoration and new
            construction. From here I crossed the construction zone in front of
            the National Gallery and went into the Galley to have a look. It was
            amazing to be able to visit so many museums and galleries for
            free.&nbsp; In the gallery I found some works of art from artist I
            recognized and saw their actual paintings, not just a poster of the
            painting (Rembrandt, Monet, Seurat, and Van Gogh). I want to see the
            Van Eyck painting, but I did not find it; the painting of &quot;The
            Marriage of Giovanni Arnolfini with Giovanna Cenami&quot;.
          </p>
          <p>
            I did a little shopping in the afternoon at HMV and Virgin Music
            Stores and Games-Workshop. After shopping I made my way out to
            Richmond on the Tube to have supper with Max and Nicola. We ate at
            another Pizza Express run restaurant and this time had pasta. Max
            lead us on a walk around the palace grounds in Richmond and then on
            to a local to have a beer.&nbsp; After saying goodbye I made my way
            back to the hotel with only a few minutes to spare until the Tube
            stopped operations for the night.
          </p>
          <p>
            <span className="climbing-h2">
              Saturday, November 30,{' '}
            </span>
            <br />
            This day I started at from the Holborn tube stop, where I walk
            around the neighborhood that included Russell Square. At the Russell
            Square tube stop is where I met up with Max and Nicole for another
            day of site seeing. Today we went through the British Museum, which
            basically houses all the things that England &quot;rank-sacked&quot;
            from other countries. This includes almost of the Parthenon from
            Rome. We also viewed the Rosetta Stone, which has now been placed
            behind glass. I had a co-worker mention that it was once unprotected
            and you could just touch the stone. There was a good collection of
            mummies as well as an interesting collection of monetary instruments
            (coins, salt, charge cards, etc.) The center of the museum hoses a
            library as well as a court yard. the court yard was once open the
            the air but has now been enclosed with a very interesting
            architectural glass and frame roof.
          </p>
          <p>
            After the museum, we went to eat at the &quot;All One Bar&quot; a
            chain of bars in the London area. But on the way we stopped in at,
            &quot;The Model Zone&quot; where I picked up a model of a mini
            cooper. Max then took me by a couple shops that I wanted to find,
            but had not been to yet after we ate. We stopped by the &quot;Black
            Market&quot; a London dance music shop, but we failed to find the
            book store that I found listed in one of my guide books. We ended
            the afternoon and night by stopping at Costa Coffee for a drink.
          </p>
          <p>
            <span className="climbing-h2">
              Sunday, December 1,{' '}
            </span>
            <br />
            The Greenwich day, started off with the fun of trying to getting
            there. I attempted to use only two trains to get out to Greenwich,
            but I ran into a weird on/off schedule on Sunday trains as well as
            engineers repairing two of the 4 tube transitions to the dockland
            trains. So what should have taken 45 minutes took 95 minutes, I did
            however mange to find a great way back to my hotel which only took
            45 minutes. I arrived in Greenwich at the Cutty Sark and was met
            with wind and rain. I made my way to the National Maritime Museum
            and had a great time there looking through all of their displays.
            Some of the highlights included a set of displays showing a
            then-and-now of the Thames waterfront. Also their was an entire area
            dedicated to the Shackleton adventures, where I saw a theatrical
            presentation from &quot;One of the survivors of the Endurance.&quot;
            There was also a great area for kids to discover how waves are
            formed, how Morris Code works, how to fire a cannon, etc.
          </p>
          <p>
            Greenwich is known for its markets, so I spent some time looking
            through and buying some of the items. I found some good chocolate. I
            had lunch at a local called, &quot;The Rose.&quot; I then moved on
            to Greenwich park and the Royal Observatory that is located on top
            of a hill in the middle of the park. From the vantage point of the
            hill you can see quite far, it also makes a great place to put an
            observatory. At the observatory I learned about the history of time,
            and how the history of time and sea travel were closely dependant on
            each other.&nbsp; There are many places at the observatory for great
            photos of standing in both West and East degrees. The observatory
            was used to track star travel in order to determine date and time.
            By tracking the stars the speed and rotation of the earth on its
            axis and the rotation of the earth around the sun the scientists
            could determine date and time information. Sea travel was originally
            done using the stars alone.
          </p>
          <p>
            In back of the observatory is the Royal Planetarium which has an
            awesome architecture, however I did not go in through it. After
            going through the observatory, I climb a path in the park to a
            church where some young men where using mountain boards to go down
            the hill in the park. I took one last trip through the markets and
            then headed back to my hotel.
          </p>
          <p>
            Back at the hotel I dropped my newly acquired souvenirs and went to
            an Italian restaurant down the street, &quot;Bazzaros.&quot;
          </p>
          <p>
            <span className="climbing-h2">
              Monday, December 2,{' '}
            </span>
            <br />
            This was my last day to explore London, because the next day would
            only allow for just getting to the airport. I started the day with
            another walk, this time to Hyde park and then on to Notting Hill
            gate and Portobello Road. I found a cool sci-fi store that I wanted
            to go in, but there was no store hours posted. On Portobello road I
            also found produce markets and more people watching opportunities.
            After 9:00 I was back on the tube out to Kings Cross and St. Pancras
            Station. There was suppose to be a location at Kings Cross where a
            scene from the movie Harry Potter was filmed at, but I could not
            find anything that looked like the movie. Near this station is the
            British Library that now houses works from Shakespeare, Leonardo da
            Vinci, and Jane Austen. Some of the works include the Gutenberg
            Bible, Codex Sinaiticus, and the Magna Carta.
          </p>
          <p>
            I then went to Tottenham Court tube stop to find the &quot;Forbidden
            Plant&quot; Store. This store was awesome, it had the greatest
            assortment of Sci-fi posters, figures, etc.&nbsp; Another store I
            tried to find, was an Irish Store to get some Guinness glasses, but
            I found that it had moved or went out of business.
          </p>
          <p>
            Next, I made my way to the Millennium Bridge, which I used to get
            across to the Tate Modern Gallery. At the gallery I had lunch on the
            7th floor at a window over looking the Thames river and the entire
            waterfront including a spectacular view of St Paul&apos;s Cathedral. At
            the Gallery I found some Picasso paintings that I had seen in art
            books as well as some new artists that seemed to ride the line
            between genius and insanity. Some of the more memorable works of art
            included a couple of drawing that used lines and color to trick your
            eye in the seeing things that were not there.
          </p>
          <p>
            For dinner I found an Irish restaurant called &quot;Mulligans&quot;
            and had a traditional Irish meal and dessert. Because I had not
            found the Guinness glasses I was looking for, I asked the waiter
            about where I could get some. She checked with her manager and came
            back saying I could just take some of theirs. So I got 4 glasses
            costing about 26 USD for nothing; I gave the waiter a nice tip. In
            my excitement from getting the glasses, I managed to leave the
            restaurant forgetting my camcorder; I returned only minutes later to
            pick it up again.
          </p>
          <p>
            After get back to the hotel I packed up all of my purchases and
            clothes so that I would be ready in the morning for my early trip to
            the airport.
          </p>
          <p>
            <span className="climbing-h2">
              Tuesday, December 3,{' '}
            </span>
            <br />
            Leaving Day, I got up and checked out of the hotel around 6:20AM and
            then made for the Airport. At the airport I waited with the rest of
            the travelers in a bull pin type of area where travelers were made
            to wait until a gate number was given to their flight. Gate
            assignment are shown to the travelers about 30 minutes before the
            plane is scheduled to take off. While waiting in this area where
            travelers are coerced to spend any left over local currency by the
            vast number of shop managers, I picked up some breakfast.
          </p>
          <p>
            In Chicago I had to go through customs, so you have to go through
            immigration, pick up your bags, do any baggage customs, and then
            recheck your bags for your connecting flight. The plane back to
            Denver was over booked and 60 people were waiting on standby, I
            think the weather had several flights canceled into Denver the
            previous days.
          </p>
          <p>
            I arrived in Denver, picked up my bags, and met my sister in her car
            waiting at passenger pick.
          </p>
          <p>&nbsp;</p>
        </section>
      </article>
    </main>
  );
}

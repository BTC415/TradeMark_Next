import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

export default function App() {
  return (
    <Carousel autoPlay stopOnHover={false} infiniteLoop interval={5000} showThumbs={false}>
      <div>
        <Image className='w-full h-[900px]' src='/logo-farm1.jpg'
          blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAFBQUFBVUFpkZFp9h3iHfbmqm5uquf/I18jXyP//////////////////////////////////////////////////2wBDAVBQUFBVUFpkZFp9h3iHfbmqm5uquf/I18jXyP//////////////////////////////////////////////////wAARCAB8AOIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAnEAEBAAEDAwUAAgMBAAAAAAAAARECEiFBUWETIjFxgWKRAzJCsf/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAZEQEBAQEBAQAAAAAAAAAAAAAAEQESIQL/2gAMAwEAAhEDEQA/ACKOrmgoCAAAAgoCCgIAAAoAACgIKAgogAAAAAAooCCgIAAigIKAgoCCgIKAgoCCgIKAigAAACggoCgIIKKIKAgoCCgIKAgoIgoCCgIKAgoCCgqCgIKAgoCjpiJtZqxgawYKRkawYUZGgRkaAZGgGRrBilIyNYMFGRrAUZGgGRoBkUpuzKIOV41z6ejYxn3da5YG7MMt1IgoIxz3q5vesTVlrLm6LmrurJm9qep41uq7vDPPatbaXQ3eDcuynp0ukTdOxujXp6vB6erwXSJmGYvp6vB6erwXSGTKenr8Js1lI1kyxs19k5hSOmRyyZq0dRyzV3UqR0HPdTcdEdGNabi3MTduLHOXdq01q6/5pMRNubzYxmbVdNFtzbctucskxF3RvNSNjG6C9EY9/hcau8bEGceVx5qgJjzVUAXLOZ3MzuDWTLG6JvgOuTLjv8HqeArtuq768+/Ulurkg9O+nqyPLz1qYIV6NX+bS5SpNLVqaJG9ufhJJeq2XTUU2VLFzqbl1A54G8fwSSdrAYGrpkNk7gz9YPxrbemo26gZ/Bfd2oB7qe/tWsY6T8ObxnDSM+7wWap81rGOiXKjGNX2sk7tfRJP0GcQ4nT+2sf2AxZys7cKZgJ4MUzOUylDv2Mf+YXoznolWLwE0ZdcSYzQjHN+Gfx1u7pGsXrUHPZra+2tulRWcac8tWwTEoGVyzjye7sDWThndIvFBThnMTINjnyAu3PNmTPaueWbatR1zJ8F8uVpaUdLZ/0m5xl3Xl1khRc8YTNwsXV/qlIzc1dsGpBWPwxq6R1UHK5aknHtJeVoLdPnELt09C3ETPyDSuc1XZTTeJ9g6DOecKCiJnkGhkBbhi4+ZCpkBLmdSsW2iNc9xytsoFf/2Q=='
          alt='img' width={1000} height={900}  placeholder='blur'/>
        <p className="legend">Mohawk at Wynwood - Phase II</p>
      </div>
      <div>
        <Image className='w-full h-[900px]' src='/logo-farm3.jpg' alt='img' width={1000} height={900} placeholder='blur'
        blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAFBQUFBVUFpkZFp9h3iHfbmqm5uquf/I18jXyP//////////////////////////////////////////////////2wBDAVBQUFBVUFpkZFp9h3iHfbmqm5uquf/I18jXyP//////////////////////////////////////////////////wAARCAB8AOIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAnEAEBAAEDAwUAAgMBAAAAAAAAARECEiFBUWETIjFxgWKRAzJCsf/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAZEQEBAQEBAQAAAAAAAAAAAAAAEQESIQL/2gAMAwEAAhEDEQA/ACKOrmgoCAAAAgoCCgIAAAoAACgIKAgogAAAAAAooCCgIAAigIKAgoCCgIKAgoCCgIKAigAAACggoCgIIKKIKAgoCCgIKAgoIgoCCgIKAgoCCgqCgIKAgoCjpiJtZqxgawYKRkawYUZGgRkaAZGgGRrBilIyNYMFGRrAUZGgGRoBkUpuzKIOV41z6ejYxn3da5YG7MMt1IgoIxz3q5vesTVlrLm6LmrurJm9qep41uq7vDPPatbaXQ3eDcuynp0ukTdOxujXp6vB6erwXSJmGYvp6vB6erwXSGTKenr8Js1lI1kyxs19k5hSOmRyyZq0dRyzV3UqR0HPdTcdEdGNabi3MTduLHOXdq01q6/5pMRNubzYxmbVdNFtzbctucskxF3RvNSNjG6C9EY9/hcau8bEGceVx5qgJjzVUAXLOZ3MzuDWTLG6JvgOuTLjv8HqeArtuq768+/Ulurkg9O+nqyPLz1qYIV6NX+bS5SpNLVqaJG9ufhJJeq2XTUU2VLFzqbl1A54G8fwSSdrAYGrpkNk7gz9YPxrbemo26gZ/Bfd2oB7qe/tWsY6T8ObxnDSM+7wWap81rGOiXKjGNX2sk7tfRJP0GcQ4nT+2sf2AxZys7cKZgJ4MUzOUylDv2Mf+YXoznolWLwE0ZdcSYzQjHN+Gfx1u7pGsXrUHPZra+2tulRWcac8tWwTEoGVyzjye7sDWThndIvFBThnMTINjnyAu3PNmTPaueWbatR1zJ8F8uVpaUdLZ/0m5xl3Xl1khRc8YTNwsXV/qlIzc1dsGpBWPwxq6R1UHK5aknHtJeVoLdPnELt09C3ETPyDSuc1XZTTeJ9g6DOecKCiJnkGhkBbhi4+ZCpkBLmdSsW2iNc9xytsoFf/2Q=='/>
        <p className="legend">Advenir at Mallory Lake</p>
      </div>
      <div>
        <Image className='w-full h-[900px]' src='/logo-farm4.jpg' alt='img' width={1000} height={900} placeholder='blur'
        blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAFBQUFBVUFpkZFp9h3iHfbmqm5uquf/I18jXyP//////////////////////////////////////////////////2wBDAVBQUFBVUFpkZFp9h3iHfbmqm5uquf/I18jXyP//////////////////////////////////////////////////wAARCAB8AOIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAnEAEBAAEDAwUAAgMBAAAAAAAAARECEiFBUWETIjFxgWKRAzJCsf/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAZEQEBAQEBAQAAAAAAAAAAAAAAEQESIQL/2gAMAwEAAhEDEQA/ACKOrmgoCAAAAgoCCgIAAAoAACgIKAgogAAAAAAooCCgIAAigIKAgoCCgIKAgoCCgIKAigAAACggoCgIIKKIKAgoCCgIKAgoIgoCCgIKAgoCCgqCgIKAgoCjpiJtZqxgawYKRkawYUZGgRkaAZGgGRrBilIyNYMFGRrAUZGgGRoBkUpuzKIOV41z6ejYxn3da5YG7MMt1IgoIxz3q5vesTVlrLm6LmrurJm9qep41uq7vDPPatbaXQ3eDcuynp0ukTdOxujXp6vB6erwXSJmGYvp6vB6erwXSGTKenr8Js1lI1kyxs19k5hSOmRyyZq0dRyzV3UqR0HPdTcdEdGNabi3MTduLHOXdq01q6/5pMRNubzYxmbVdNFtzbctucskxF3RvNSNjG6C9EY9/hcau8bEGceVx5qgJjzVUAXLOZ3MzuDWTLG6JvgOuTLjv8HqeArtuq768+/Ulurkg9O+nqyPLz1qYIV6NX+bS5SpNLVqaJG9ufhJJeq2XTUU2VLFzqbl1A54G8fwSSdrAYGrpkNk7gz9YPxrbemo26gZ/Bfd2oB7qe/tWsY6T8ObxnDSM+7wWap81rGOiXKjGNX2sk7tfRJP0GcQ4nT+2sf2AxZys7cKZgJ4MUzOUylDv2Mf+YXoznolWLwE0ZdcSYzQjHN+Gfx1u7pGsXrUHPZra+2tulRWcac8tWwTEoGVyzjye7sDWThndIvFBThnMTINjnyAu3PNmTPaueWbatR1zJ8F8uVpaUdLZ/0m5xl3Xl1khRc8YTNwsXV/qlIzc1dsGpBWPwxq6R1UHK5aknHtJeVoLdPnELt09C3ETPyDSuc1XZTTeJ9g6DOecKCiJnkGhkBbhi4+ZCpkBLmdSsW2iNc9xytsoFf/2Q=='/>
        <p className="legend">Mohawk at Wynwood - Phase II</p>
      </div>
    </Carousel>
  );
};
# 3D_terrain
## 소감문

수업시간에 한  perlin Noise를 활용하여 3D 지형만들기를 해보았습니다 
perlin Noise는 자연스러운 패턴을 생성하는데 유용한 알고리즘이라 3D지형 생성에 자주 사용된다고 합니다

이것으로 저는 terrain[x][y] 에 xoff와 yoff 값을 더 낮게 더하게 함으로써 평면을 더 부드럽게 하여 
바다와 같은 이미지로 표현해보았습니다. flying 객체를 사용하여 앞으로 나아가는 듯한 느낌을 받게 하였는데 
이 값을 줄여서 파도의 물결이 일렁이는 듯한 느낌을 주었고

push(),pop() 함수에 sphere를 추가하고 directionalLight를 넣어서 마우스의 움직임에 따라 도형이 이동하고 
도형의 빛의 강도를 조절할 수 있게 하였습니다 그리고 img load를 하여 달의 이미지를 가지고 와서 표현하였고
배경색은 background 색을 검정색 느낌을 주기위해 값을 낮게 설정하였습니다

프로젝트를 하면서 p5.js와 조금 더 친해진 것 같습니다. 
![과제2](https://github.com/taehoony123/3D_terrain/assets/164149952/16acb21f-98c7-41f9-98f3-81fb40a5ac7e)

use std::io;
use std::cmp;

fn main() {
	let mut buf = String::new();
	io::stdin().read_line(&mut buf).unwrap();
	let time: i32 = buf.trim().parse().unwrap();
	buf.clear();

    // 각 버튼
    let a = 300;
    let b = 60;
    let c = 10;

    // 만약 주어진 시간 T를 맞출 수 없다면 -1 출력
    if time % c != 0 {
        println!("-1");
        return;
    }

    // 각 버튼을 누른 횟수 계산 (큰 것 부터)
    let a_count = time / a;
    let b_count = (time % a) / b;
    let c_count = (time % a % b) / c;

    println!("{} {} {}", a_count, b_count, c_count);
}
use std::io;
use std::cmp;
use std::collections::VecDeque;

fn main() {
	let mut buf = String::new();
	io::stdin().read_line(&mut buf).unwrap();

    let input = buf.trim();
    let mut chars: Vec<char> = input.chars().collect();

    let mut ans = 0;
    let mut queue: VecDeque<usize> = VecDeque::new();
    let mut a_count = 0;
    let mut b_count = 0;

    for i in 0..chars.len() {
        if chars[i] == 'B' { // B면 queue에 인덱스 삽입
            b_count += 1;
            queue.push_back(i);
        }
        if chars[i] == 'C' && b_count > 0 { // 그 뒤가 C면
            b_count -= 1;
            ans += 1; // 카운트 1 증가
            let b_index = queue.pop_front().unwrap(); // queue에서 제거
            chars[b_index] = 'C';
            chars[i] = 'C';
        }
    }

    let mut queue: VecDeque<usize> = VecDeque::new();
    for i in 0..chars.len() {
        if chars[i] == 'A' {
            a_count += 1;
            queue.push_back(i);
        }
        if chars[i] == 'B' && a_count > 0 {
            a_count -= 1;
            ans += 1;
            let a_index = queue.pop_front().unwrap();
            chars[a_index] = 'C';
            chars[i] = 'C';
        }
    }

    println!("{}", ans);
}
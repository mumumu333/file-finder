# file-finder
<br>フォルダ及びファイル名を検索し、それらを一つのフォルダにコピーしてくれるツール
<br><br>
# ダウンロードの手順
<br>①nodeとnpmをインストールしておく

<b><pre>$node -v</pre></b>
<b><pre>$npm -v</pre></b>

<br><br>②このリポジトリをローカルにダウンロードし、下記を入力

<b><pre>$cd file-finder</pre></b>
<b><pre>$npm install</pre></b>
<b><pre>$mkdir items</pre></b>
<br><br>
# 使い方
<br>1. items.csvをテキストエディタで開き、検索したいフォルダ名及びファイル名を入れる。複数検索の場合は改行区切りにする。

![2022-08-20](https://user-images.githubusercontent.com/97781019/185735692-7bac5713-1ce4-4a36-9e2c-866b389171fa.jpg)

<br>2. file-finderのディレクトリに移動し、下記コマンドを入力。 検索が終わったらコマンドに検索結果とかかった時間が表示される。

<b><pre>$node index.js 検索したいディレクトリ名</pre></b>

<br>！検索範囲が広いほどpcに負荷がかかるため、ある程度検索範囲を絞って下記のコマンドを入れていくことをおすすめする。

<b><pre>$node --max-old-space-size=4096 index.js 検索したいディレクトリ名</pre></b>

<br>3. itemsフォルダ内にリストに書いた名前のフォルダが作成され、その中に検索結果で取得したファイル・フォルダーがコピーされる。

![2022-08-20 (2)](https://user-images.githubusercontent.com/97781019/185736648-dbeb5b59-664a-4f8b-8970-21b204c5e7be.jpg)

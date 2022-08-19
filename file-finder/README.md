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
<br>1. items.csvをテキストエディタで開き、検索したい名前が含まれたフォルダ及びファイル名を入れる。複数検索の場合は改行区切りにする。

<br>2. file-finderのディレクトリに移動し、下記コマンドを入力。 検索が終わったらコマンドに検索結果とかかった時間が表示される。

<b><pre>$node index.js 検索したいディレクトリ名</pre></b>

<br>！検索範囲が広いほどpcに負荷がかかるため、ある程度検索範囲を絞って下記のコマンドを入れていくことをおすすめする。

<b><pre>$node --max-old-space-size=4096 index.js 検索したいディレクトリ名</pre></b>

<br>3. itemsフォルダ内に該当のファイルとフォルダーがコピーされる。



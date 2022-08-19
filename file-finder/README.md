# file-finder
<br>検索したい名前が含まれたフォルダ及びファイルを検索し、一つのフォルダにコピーしてくれるツール
<br><br># 実行環境
<br>nodeをインストールした上でfile-finderのディレクトリ内にて下記をコマンドで入れてください。
<br><br>・モジュール
<br>npm csv
<br>npm findit
<br>npm fs-extra
<br>npm lodash
<br>npm moment
<br><br><br>・フォルダ（検索したファイル・フォルダがここに入ります）
<br>mkdir items
<br><br><br># 使い方
<br>1. items.csvをテキストエディタで開き、検索したい名前が含まれたフォルダ及びファイル名を入れる。複数検索の場合は改行区切りにしてください。
<br>2. file-finderのディレクトリに移動し、下記コマンドを入力。 検索が終わったらコンソールに検索結果とかかった時間が表示されます。
<br>node index.js
<br>！検索範囲が広いほどpcに負荷がかかるため、ある程度ディレクトリの範囲を絞って下記のコマンドを入れていくことをおすすめします
<br>node --max-old-space-size=4096 index.js ディレクトリ名
<br>3. itemsフォルダ内に該当のファイルとフォルダーがコピーされます。



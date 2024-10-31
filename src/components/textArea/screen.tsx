export const TextArea = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
      }}>
      <textarea
        style={{
          width: 'calc(100% - 80px)',
          height: 320,
          padding: '14px 20px',
          fontSize: 14,
          marginTop: 20,
          borderRadius: 10,
        }}
        placeholder={`ex)
저는 자연을 좋아하고 활발한 액티비티를 좋아합니다.
하지만 사람을 만나기 보다는 자연을 느끼는 힐링여행을
제주도로 갈 생각이에요.

저는 30대 여성이고 동행자 없습니다.`}
      />
    </div>
  );
};

import sys
from youtube_transcript_api import YouTubeTranscriptApi



def getTranscript(video_id) :
    print('this is gettranscript')

    transcriptArrayOfObjs = []
    transcriptArrayOfObjs = YouTubeTranscriptApi.get_transcript(video_id)
    
    fulltranscript = ''

    for transcript in transcriptArrayOfObjs : 
        fulltranscript =fulltranscript + ' '+ transcript['text']

    return fulltranscript

def main(video_id):
    print('this is main '+ video_id)
    
    response = getTranscript(video_id)
    print(response)

if __name__ == "__main__":
    video_id = sys.argv[1]
    print('this is input url  ' + video_id,)
    main(video_id)
    

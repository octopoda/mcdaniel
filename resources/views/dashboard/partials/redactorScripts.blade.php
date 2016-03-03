<script src="/js/plugins/redactor.source.js"></script>
<script src="/js/plugins/redactor.video.js"></script>
<script src="/js/plugins/redactor.clips.js"></script>

<script>
$(function() {
    $('.redactor').redactor({
    	 plugins: ['source', 'video', 'clips'],
    	 multipleImageUpload: true,
    	 imageCaption:true,
    	 dragImageUpload: true,
    	 imageUpload: '/api/v1/imageUpload',
    	 // buttons: ['format', 'bold', 'italic']
    });
 });
</script>
